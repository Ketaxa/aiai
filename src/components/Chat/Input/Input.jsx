import styles from './Input.module.css'
export default function Input({onSubmit, input, setInput, loading, setMessage}) {

const handleMessage = () => {
  if (!input.trim()) return;
  setMessage(prev => [
    ...prev,
    {
      id: Date.now(),
      sender: 'user',
      text: input
    }
  ]);
  setInput("");
}
    return (
        <div className={styles.form_block}>
          <h1 className={styles.main_header}>VibeCoding GPT v1.0</h1>
            <form onSubmit={onSubmit} className={styles.form}>
              <input
            type="text"
            value={input}
            className={styles.input_field}
            placeholder="Введите запрос..."
            onChange={(e) => setInput(e.target.value)}
              />
            <button className={styles.button} type='submit' onClick={handleMessage}>{loading ? "Отправка..." : "Отправить запрос"}</button>
            </form>
        
        </div>
    )
}