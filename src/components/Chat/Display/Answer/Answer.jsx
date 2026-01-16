import styles from "./Answer.module.css";
import Typewriter from "typewriter-effect";

export default function Answer({ item }) {
  function checkAnswer(item) {
      <div className={styles.dialogue}>    <Typewriter
      options={{
        strings: item,
        autoStart: true,
        loop: false,
        delay: 70,
      }}
    />;</div>
  }

  return (
    <div>
        {item}
    </div>
  );
}
