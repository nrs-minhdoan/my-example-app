import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import MemoExample from "./components/MemoExample";
import NoMemoExample from "./components/NoMemoExample";

let globalKey = "1";

const changeGlobalKey = () => {
  globalKey += "1";
  console.log("update global key: ", globalKey);
};

function App() {
  const [stateKey, setStateKey] = useState<string>("2");
  const refKey = useRef<string>("3");

  useEffect(() => {
    console.log("*** effect parent ***");
    if (stateKey !== "2") {
      console.log("update state key: ", stateKey);
    }
  }, [stateKey]);

  const changeStateKey = () => {
    setStateKey((prev) => prev + "2");
  };

  const changeRefKey = () => {
    refKey.current += "3";
    console.log("update ref key: ", refKey.current);
  };

  console.log("=== render parent ===");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <section style={{ display: "flex", gap: 16 }}>
          <button type="button" onClick={changeGlobalKey}>
            Change Global Key
          </button>
          <button type="button" onClick={changeRefKey}>
            Change Ref Key
          </button>
          <button type="button" onClick={changeStateKey}>
            Change State Key
          </button>
        </section>
        <br />
        <MemoExample key={"m" + globalKey} type="global key" />
        <br />
        <MemoExample key={"m" + refKey.current} type="ref key" />
        <br />
        <NoMemoExample key={globalKey} type="global key" />
        <br />
        <NoMemoExample key={refKey.current} type="ref key" />
      </header>
    </div>
  );
}

export default App;
