import { ReactComponent as Close } from "../../assets/close.svg";
import "./feedback.css";

function Feedback(props) {
  return (
    <div className="feedback-display">
      <div className="feedback-flex">
        <p className="feedback-text">{props.feedback}</p>
        <Close className="feedback-close" />
      </div>
      <div className="feedback-flex">
        <p className="feedback-started">Started on&nbsp;</p>
        <p className="feedback-started-date">{props.startedDate}</p>
      </div>
    </div>
  );
}

export default Feedback;
