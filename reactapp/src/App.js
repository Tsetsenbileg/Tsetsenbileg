import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add from "./components/Add/add.jsx";
import Category from "./components/category/category";
import { useEffect, useState } from "react";
import axios from "axios";
const Sentences = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/sentence").then((res) => {
      if (res.data.length > 0) {
        setData(() => res.data.map((el) => el.str));
      }
    });
  }, []);
  return (
    <div>
      {data.map((el, ind) => {
        return <div key={ind}>{el}</div>;
      })}
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/add" exact component={Add} />
          <Route path="/sentences" component={Sentences} />
          <Route path="/category" component={Category} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
