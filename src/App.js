import React from "react";
import { useState, useEffect } from "react";
import data from "./data";
import "./App.css";
import "./style.css";
{
  /* <style> */
}

function App() {
  const [template, setTemplate] = useState([]);

  useEffect(() => {
    setTemplate(data);
  }, []);

  const cake = (NAME) => {
    const newData = template.filter((item) => item.NAME !== NAME);
    setTemplate(newData);
    // console.log(newData);
  };

  return (
    <>
      <button class="head" id="s" >
        <h1 class="head"> BIRTHDAY REMINDER </h1>
      </button>
      <br />
      <br />
      {template.map((human) => {
        return (
          <>
            <button class="main" >
              <div class="main" id="m" widht="50px">
              <h4 id="sno">{human.SNO}</h4>
              <img src={human.Image} width="160pxl" />
              <h1>{human.NAME}</h1>
              <h2>{human.BIRTHDAY}</h2>
              <button id="but"
                onClick={() => {
                  cake(human.NAME);
                }}
                >
                {" "}
                REMOVE
              </button>
                </div>
            </button>
            
          </>
        );
      })}
    </>
  );
}

export default App;
