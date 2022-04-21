import logo from "./logo.svg";
import "./App.css";
import Time from "./component/time";

function App() {
  let date = "2018-10-11",
    time = "20:30";
  let timeZone = "America/Los_Angeles";
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Time with Luxon</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Time date={date} time={time} />
      </header>
    </div>
  );
}

export default App;
