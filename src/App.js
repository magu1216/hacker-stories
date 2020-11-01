import logo from "./logo.svg";
import "./App.css";

const welcome = {
  prefix: "Hello",
  name: "Markus",
};

function getTitle(name) {
  return name;
}

function App() {
  return (
    <div>
      <h1>
        {welcome.prefix} {getTitle(welcome.name)}
      </h1>

      <label htmlFor="search">Search: </label>
      <input type="text" name="The Input" id="search" />
    </div>
  );
}

export default App;
