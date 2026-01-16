const API_KEY =
  "";

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
  setLoading(true);
  
  try {
    console.log(message.id)
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: toString(message[0].text),
      }),
    });


    const data = await response.json();
    const request = data.choices[0].messages.content;

    setMessage(prev => [
      ...prev,
      {
        id: Date.now(),
        sender: 'ai',
        text: request
      }
    ])
    //setHistory((prev) => [...prev, { pull: input, response: request}]); Async внесение данных для дин отображения вопросов и ответов нейросети
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
    setInput("");
  }
}
