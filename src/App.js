import "./App.css";
import Form from "./components/Form";
import InputValuesList from "./components/InputValuesList";
import React, { useState } from "react";

function App() {
  const [inputValues, setInputValues] = useState([]);

  const addUser = (name, age) => {
    setInputValues((prev) => {
      return [
        ...prev,
        { input1: name, input2: age, key: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <Form handleUsers={addUser} />
      <InputValuesList users={inputValues} />
    </div>
  );
}

export default App;
