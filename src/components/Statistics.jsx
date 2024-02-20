const Statistics = ({good, neutral, bad}) => {
    console.log(good);
    let total = good + neutral + bad;
    let avr = (good*1 + neutral*0 + bad*(-1))/total;
    let posPercent = good/total*100;

  return (
    <div>
      <h1>Statistics</h1>
      {total > 0 ? (
        <ul>
          <li>good {good}</li>
          <li>neutral {neutral}</li>
          <li>bad {bad}</li>
          <li>all {total}</li>
          <li>average {avr}</li>
          <li>positive {posPercent} %</li>
        </ul>
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

export default Statistics;
