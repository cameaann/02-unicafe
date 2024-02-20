import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let total = good + neutral + bad;
    let avr = (good*1 + neutral*0 + bad*(-1))/total;
    let posPercent = good/total*100;


  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <h1>Statistics</h1>
      { total > 0 ? (
      <ul>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
        <li>all {total}</li>
        <li>average {avr}</li>
        <li>positive {posPercent} %</li>
      </ul>) : ''
       }
    </div>
  );
};

export default App;
