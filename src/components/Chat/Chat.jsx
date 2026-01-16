import styles from "./Chat.module.css";
import Display from "./Display/Display";
import Input from "./Input/Input";

export default function Chat({
  onSubmit,
  loading,
  setInput,
  input,
  setMessage,
  message,
}) {
  return (
    <div className={styles.chat}>
      {message.length > 0 && <Display message={message} />}

      <Input
        onSubmit={onSubmit}
        input={input}
        setInput={setInput}
        loading={loading}
        setMessage={setMessage}
      />
    </div>
  );
}
