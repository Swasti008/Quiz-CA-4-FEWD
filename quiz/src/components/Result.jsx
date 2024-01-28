//Result Page
import Logo from "../assets/logo.png";
import "./QuestionBox.css";
import Star from "../assets/robot (1).png";

export default function Result(props) {
  const percentage = (props.count / 5) * 100;
  return (
    <div style={props.backgroundImage} className="forImage">
      <div className="header">
        <div
          className={`toggleButton ${props.state ? "dark" : "light"}`}
          onClick={props.darkMode}
        >
          <div className="circle"></div>
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>BRAINBURST</span>
        </div>
      </div>
      <div className="containerBox">
        <div className={`questionBox ${props.state ? "dark" : "light"}`}>
          <div className="result">
            <h1>RESULT</h1>
            <img src={Star} alt="robot" id="Robot" />
            <h3>
              {props.count} out of 5 correct - ({percentage}%)
            </h3>
            <button onClick={props.reset}>RESTART</button>
          </div>
        </div>
      </div>
    </div>
  );
}
