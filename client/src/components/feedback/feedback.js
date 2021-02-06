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
        <p className="feedback-started">Posted on&nbsp;</p>
        <p className="feedback-started">{props.startedDate} by&nbsp;</p>
        <p className="feedback-started-author">{props.author}</p>
      </div>
    </div>
  );
}

export default Feedback;
