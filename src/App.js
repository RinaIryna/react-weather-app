import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Helsinki" />
        <footer>
          <a
            href="https://github.com/RinaIryna/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="source"
          >
            Open-source code{" "}
          </a>
          by Iryna Lobova
        </footer>
      </div>
    </div>
  );
}
