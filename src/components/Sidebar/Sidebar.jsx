import styles from "./Sidebar.module.css";
import History from "./History/History";
export default function Sidebar({ history }) {
  return (
    <div className={styles.request_store}>
      <div className={styles.container}>
      <h1 className={styles.header}>Список запросов</h1>
      {/* <div className={styles.request_el}> */}
      {
      history.length === 0
        ? "пока нет запросов"
        : history.map((item, index) => (
            <History item={item} input={item.pull} response={item.response}  key={`${Date.now()}_${index}`} />
          ))}
          {/* </div> */}
          </div>
    </div>
  );
}
