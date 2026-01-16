import styles from "./History.module.css";
export default function History({ item }) {
  return (
    <div className={styles.item_block}>
      <div className={styles.response}>{item.text}</div>
    </div>
  );
}
