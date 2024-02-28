import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad;
  let avr = (good * 1 + neutral * 0 + bad * -1) / total;
  let posPercent = (good / total) * 100;

  // if(total <= 0){
  //   return (
  //     <div>
  //           <h1>Statistics</h1>
  //           <div>No feedback given</div>
  //     </div>
      
  //   )
  // }

  return (
    <div>
      <h1>Statistics</h1>
      {total > 0 ? (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={avr} />
            <StatisticLine text="positive" value={posPercent + "%"} />
          </tbody>
        </table>
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

export default Statistics;
