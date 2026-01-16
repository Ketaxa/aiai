import styles from "./Chat.module.css";
import Display from "./Display/Display";
import Input from "./Input/Input";


export default function Chat({
  onSubmit,
  loading,
  setInput,
  input,
  history,
  setMessage,
  message
}) {

  return (
    <div className={styles.chat}>
      <Display history={history} message={message}/>
      <Input onSubmit={onSubmit} input={input} setInput={setInput} loading={loading} setMessage={setMessage}/>
    </div>
  );
}
