import logo from "./logo.svg";
import "./App.css";
import List from "./List";

const welcome = {
  prefix: "Hello",
  name: "Markus",
};

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function getTitle(name) {
  return name;
}

function App() {
  return (
    <div>
      <h1>
        {welcome.prefix} {getTitle(welcome.name)}
      </h1>
      <hr />
      <List />
      <label htmlFor="search">Search: </label>
      <input type="text" name="The Input" id="search" />
    </div>
  );
}

export default App;
