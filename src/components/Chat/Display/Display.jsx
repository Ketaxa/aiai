import styles from './Display.module.css'
import Question from './Question/Question';
import Answer from './Answer/Answer';
import { useEffect } from 'react';
export default function Display({message, history}) {
  useEffect(() => {
    console.log(message[0].text)
  }, [message])
    return (
              <div className={styles.information}> 12321
        {/* {
              history.length === 0
                ? "Начните диалог!"
                : history.map((item, index) => (
                  <div key={index}> 
                    <Question item={item.pull}/>
                    <Answer item={item.response}/>
                    </div>
                  ))} */}
        </div>
    )
}
/*
ИНСТРУКЦИЯ: ЧАТ С ИИ НА REACT (useState + useEffect)

ЦЕЛЬ ЗАДАНИЯ
Реализовать простой интерфейс чата с ИИ, используя React hooks.

ТРЕБОВАНИЯ
- Внизу страницы: поле ввода (input) и кнопка «Отправить»
- Вверху страницы: область отображения сообщений
- Сообщения отображаются подряд, как диалог
- Контекст ИИ не сохраняется
- Каждый запрос к ИИ — отдельный
- Диалог существует только в интерфейсе

--------------------------------------------------

АРХИТЕКТУРА РЕШЕНИЯ

Используемые хуки:
- useState — для хранения сообщений
- useEffect — для реакции на отправку сообщения пользователем

--------------------------------------------------

СОСТОЯНИЕ ПРИЛОЖЕНИЯ

Используется один массив сообщений:

const [messages, setMessages] = useState([]);
const [input, setInput] = useState('');

СТРУКТУРА СООБЩЕНИЯ

{
  id: number,
  sender: 'user' | 'ai',
  text: string
}

В массиве messages хранятся сообщения двух типов:
- от пользователя
- от ИИ

--------------------------------------------------

ОТПРАВКА СООБЩЕНИЯ ПОЛЬЗОВАТЕЛЯ

При нажатии кнопки:
1. Проверяется, что поле ввода не пустое
2. В массив messages добавляется объект пользователя
3. Поле ввода очищается

Пример кода:

const sendMessage = () => {
  if (!input.trim()) return;

  setMessages(prev => [
    ...prev,
    {
      id: Date.now(),
      sender: 'user',
      text: input
    }
  ]);

  setInput('');
};

На этом этапе запрос к ИИ не выполняется.

--------------------------------------------------

ПОЛУЧЕНИЕ ОТВЕТА ОТ ИИ (useEffect)

useEffect(() => {
  if (messages.length === 0) return;

  const lastMessage = messages[messages.length - 1];

  // Запрос к ИИ выполняется только после сообщения пользователя
  if (lastMessage.sender !== 'user') return;

  const fetchAIResponse = async () => {
    const aiText = await getAIResponse(lastMessage.text);

    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        sender: 'ai',
        text: aiText
      }
    ]);
  };

  fetchAIResponse();
}, [messages]);

ЛОГИКА useEffect
- useEffect срабатывает при изменении массива messages
- Если последнее сообщение от пользователя — выполняется запрос к ИИ
- Если последнее сообщение от ИИ — эффект ничего не делает
- Ответ ИИ добавляется в тот же массив

Это предотвращает бесконечный цикл вызовов.

--------------------------------------------------

ОТОБРАЖЕНИЕ СООБЩЕНИЙ

<div className="chat">
  {messages.map(message => (
    <div key={message.id} className={message.sender}>
      {message.text}
    </div>
  ))}
</div>

--------------------------------------------------

ИТОГ

- Используется один массив состояния
- В массиве хранятся объекты двух типов
- useEffect реагирует только на сообщения пользователя
- ИИ не хранит контекст
- Диалог — это визуальная последовательность сообщений

Задание демонстрирует базовую работу с useState, useEffect и асинхронными запросами в React.

*/