import { useState } from "react";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { getRequest } from "./lib/getRequest";
import './index.css'

function App() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState([])
  


  return (
    <div className={styles.grid_comp}>
      <div className={styles.sidebar}>
      <Sidebar message={message} />
</div>
<div className={styles.request_block}>
      <Chat
        input={input}
        setInput={setInput}
        loading={loading}
        setMessage={setMessage}
        message={message}
        onSubmit={(e) => {
          getRequest({
            e,
            input,
            setInput,
            setLoading,
            message,
            setMessage
          })}
        
        }
      />
      </div>

    </div>
  );
}

export default App;
