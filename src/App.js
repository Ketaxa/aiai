import { useState } from "react";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { getRequest } from "./lib/getRequest";
import './index.css'

function App() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState([])
  


  return (
    <div className={styles.grid_comp}>
      <div className={styles.sidebar}>
      <Sidebar history={history} />
</div>
<div className={styles.request_block}>
      <Chat
        input={input}
        setInput={setInput}
        loading={loading}
        history={history}
        setMessage={setMessage}
        onSubmit={(e) => {
          getRequest({
            e,
            input,
            setInput,
            setLoading,
            setHistory,
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
