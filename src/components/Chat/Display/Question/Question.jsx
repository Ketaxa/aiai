import styles from './Question.module.css'
export default function Question({item}) {
    return (
        <div className={styles.d}>
        <div className={styles.dialogue}>{item}</div>
        </div>
    )
}