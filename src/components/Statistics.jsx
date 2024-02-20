import StatisticLine from "./StatisticLine";

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
        <StatisticLine text = "good" value = {good}/>
        <StatisticLine text = "neutral" value = {neutral}/>
        <StatisticLine text = "bad" value = {bad}/>
        <StatisticLine text = "all" value = {total}/>
        <StatisticLine text = "average" value = {avr}/>
        <StatisticLine text = "positive" value = {posPercent + "%"}/>
        </ul>
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

export default Statistics;
