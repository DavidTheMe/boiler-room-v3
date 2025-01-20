import { useState } from "react";
import "./App.css";
import ActivityCard from "./components/ActivityCard.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Form />
      <div class='card-holder'>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </>
  );
}

export default App;
