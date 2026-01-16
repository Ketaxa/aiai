import styles from "./Answer.module.css";
import Typewriter from "typewriter-effect";

export default function Answer({ item }) {
  return (
    <div className={styles.answer}>
      <Typewriter
        options={{
          strings: item,
          autoStart: true,
          loop: false,
          delay: 15,
        }}
      />
    </div>
  );
}
