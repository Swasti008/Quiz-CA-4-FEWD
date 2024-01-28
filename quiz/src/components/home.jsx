import React, { useState } from "react";
import QuestionBox from "./QuestionBox";
import "./QuestionBox.css";
import Robot from "../assets/robot.png";

export default function Home() {
  const [toggle, setMove] = useState(true); //toggle for home part
  const [questionPart, setPart] = useState(false);//toggle for question part

  const handleMove = () => {
    setMove(!toggle);
    setPart(!questionPart);
  };

  return (
    <>
    {/* if the toggle is true then it will show home */}
      {toggle && (
        <div className="whole">
          <div className="homeContainer">
            <h1 id="large-h1">BrainBuster</h1>
            <img src={Robot} alt="robot" id="Robot" />
            <button onClick={handleMove} className="play-button">
              Let's Quiz It!
            </button>
          </div>
        </div>
      )}
      {/* if the questionPart is true then on clicking button it will move to question box */}
      {questionPart && <QuestionBox />}
    </>
  );
}
