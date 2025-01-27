import { useState } from "react";
import "./App.css";
import ActivityCard from "./components/ActivityCard.tsx";
import Form from "./components/Form.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
      <Form />
      <div className='card-holder'>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </>
  );
}

export default App;
