//Question Box Part
import React, { useState } from "react";
import questions from "./questions";
import "./QuestionBox.css";
import Back from "../assets/back.jpg";
import Light from "../assets/light.jpg";
import Result from "./Result";
import Logo from "../assets/logo.png";

export default function QuestionBox() {
  const [question, checkQuestion] = useState(0);//state for changing questions
  const [correct, correctCount] = useState(0);//state for checking questions
  const [color, changeColor] = useState(true);//state for highlighting the text
  const [darkMode, changeTheme] = useState(true);// state for darkMode

  const handleQuestionNum = () => {
    checkQuestion(question + 1);
    changeColor(true);
  };
  const handleCheckIfCorrect = (option) => {
    if (option.isCorrect === true) {
      correctCount(correct + 1);
    }
  };
  const handleReset = () => {
    checkQuestion(0);
    correctCount(0);
  };
  const handleHighlight = () => {
    changeColor(false);
  };
  const removeHighlight = () => {
    changeColor(true);
  };
  const handleDarkMode = () => {
    changeTheme((prevMode) => !prevMode);
  };
  const styleColour = {
    backgroundImage: darkMode ? `url(${Back})` : `url(${Light})`,
    backgroundSize: "cover",
  };
  // if the question index is greater than the length of the object , then it will go to restart page.
  if (question > 4) {
    return (
      <Result
        count={correct}
        reset={handleReset}
        darkMode={handleDarkMode}
        backgroundImage={styleColour}
        state={darkMode}
      />
    );
  } else {
    return (
      <div style={styleColour} className="forImage">
        <div className="header">
          <div
            className={`toggleButton ${darkMode ? "dark" : "light"}`}
            onClick={handleDarkMode}
          >
          <div className="circle"></div>
          </div>
          <div className="logo">
            <img src={Logo} alt="logo" />
            <span>BRAINBUSTER</span>
          </div>
        </div>
        {/* changing the className so by css color can change */}
        <div className="containerBox">
          <div className={`questionBox ${darkMode ? "dark" : "light"}`}>
            <p>{question + 1}/5</p>
            <h1 className={`questionColor ${color ? "red" : "black"}`}>
              {questions[question].text}
            </h1>
            <div className="options">
              {questions[question].options.map((option, index) => (
                <option
                  key={index}
                  onClick={() => {
                    handleQuestionNum();
                    handleCheckIfCorrect(option);
                  }}
                  className="choose"
                >
                  {option.text}
                </option>
              ))}
            </div>
            <div className="instruct">
              <button className="highlight" onClick={handleHighlight}>
                Highlight
              </button>
              <button className="remove" onClick={removeHighlight}>
                Remove Highlight
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
