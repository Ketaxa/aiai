import styles from "./Question.module.css";
export default function Question({ item }) {
  return <div className={styles.question}>{item}</div>;
}
