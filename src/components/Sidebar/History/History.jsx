import styles from './History.module.css'
export default function History(item) {
    return (
        <div className={styles.item_block}>
        {/* <div className={styles.title}>{item.input}</div> */}

                    <div className={styles.response}>{item.response}</div>

        </div>
    )
}