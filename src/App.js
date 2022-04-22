import logo from "./logo.svg";
import "./App.css";
import Time from "./component/time";

function App() {
  let date = "2018-10-11",
    time = "20:30",
    startDate = "2018-10-11",
    startTime = "08:30",
    endDate = "2018-12-11",
    endTime = "14:30";

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Time with Luxon</p>
        <Time
          date={date}
          time={time}
          startDate={startDate}
          endDate={endDate}
          startTime={startTime}
          endTime={endTime}
        />
      </header>
    </div>
  );
}

export default App;
