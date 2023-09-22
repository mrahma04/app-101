import logo from "./logo.svg";
import "./App.css";

function App() {
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const year = today.getDate();
    return `${month}/${date}/${year}`;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>app-101</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{getDate()}</p>
        <div>Hola!</div>
      </header>
    </div>
  );
}

export default App;