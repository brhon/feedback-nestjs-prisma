import { ReactComponent as Close } from "../../assets/close.svg";
import FeedbackService from "../../services/feedback";
import "./feedback.css";

function Feedback(props) {
  //
  const deleteFeedback = () => {
    FeedbackService.deleteFeedback(props.id).then((response) => {
      console.log(response);
      window.location.reload();
    });
  };

  return (
    <div className="feedback-display">
      <div className="feedback-flex">
        <p className="feedback-text">{props.feedback}</p>
        <Close className="feedback-close" onClick={deleteFeedback} />
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
