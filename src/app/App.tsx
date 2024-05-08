import React from "react";
import "./styles/App.css";
import InputFormPage from "pages/InputFormPage";

const App = () => {

  const closeTab = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          <h3>NEW Create a job</h3>
        </div>
        <div className="close">
          <button onClick={closeTab}>X</button>
        </div>
      </header>
      <InputFormPage />
    </div>
  );
};

export default App;
