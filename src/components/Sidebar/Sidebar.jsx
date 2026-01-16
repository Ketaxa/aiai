import styles from "./Sidebar.module.css";
import History from "./History/History";
export default function Sidebar({ message }) {
  return (
    <div className={styles.request_store}>
      <h1 className={styles.header}>Список запросов</h1>
      {message.length === 0
        ? "пока нет запросов"
        : message.map((item) =>
            item.sender === "user" ? (
              <History item={item} key={item.id} />
            ) : (
              console.log(item)
            )
          )}
    </div>
  );
}
