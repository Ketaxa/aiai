const API_KEY =
  "secret";

export async function getRequest({
  e,
  setLoading,
  input,
  setInput,
  setHistory,
  message,
  setMessage
}) {
  e.preventDefault();
  
  if (!input.trim()) return;
  
  // Сначала добавляем сообщение пользователя
  const userMessage = {
    id: Date.now(),
    sender: 'user',
    text: input
  };
  
  // Обновляем состояние с новым сообщением пользователя
  setMessage(prev => [...prev, userMessage]);
  
  // Формируем массив сообщений для API (включая новое сообщение пользователя)
  const updatedMessages = [...message, userMessage];
  const messagesForAPI = updatedMessages.map(msg => ({
    role: msg.sender === 'user' ? 'user' : 'assistant',
    content: msg.text
  }));
  
  setLoading(true);
  setInput("");
  
  try {

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: messagesForAPI,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Ошибка запроса к OpenAI');
    }

    const request = data.choices[0].message.content;

    setMessage(prev => [
      ...prev,
      {
        id: Date.now(),
        sender: 'ai',
        text: request
      }
    ])
    console.log(message)
    //setHistory((prev) => [...prev, { pull: input, response: request}]); Async внесение данных для дин отображения вопросов и ответов нейросети
  } catch (error) {
    console.error(error);
    alert('Ошибка: ' + error.message);
  } finally {
    setLoading(false);
  }
}
