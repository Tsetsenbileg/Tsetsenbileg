import "./add.css";
import axios from "axios";
import { useState } from "react";
export default function Add() {
  const [str, setStr] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const getValues = () => {
    const sentence = {
      str: str,
      category: category,
      type: type,
    };
    console.log(sentence);
    axios
      .post("http://localhost:5000/sentence/add", sentence)
      .then((res) => console.log(res.data));
  };
  const handleStr = (event) => {
    setStr(event.target.value);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleStr} />
      <select name="" id="" value={type} onChange={handleType}>
        <option value="Word">Word</option>
        <option value="Sentence">Sentence</option>
      </select>
      <select name="" id="" value={category} onChange={handleCategory}>
        <option value="Coffee shop">Coffee shop</option>
        <option value="Hospital">Hospital</option>
      </select>
      <button onClick={getValues}>Send</button>
    </div>
  );
}
