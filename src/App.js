import Footer from "./Footer";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const test = null;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {["a", "b", "c"].map((value, index) => (
        <p key={index}>{value}</p>
      ))}

      <Footer author="Álvaro Vázquez" />
    </div>
  );
}

export default App;
