import "./newFeedback.css";

function Newfeedback() {
  return (
    <div className="display">
      <p className="text">🌱 Leave new feedback</p>
      <textarea className="textarea"></textarea>
      <div className="flex-author-send">
        <input className="author-input" placeholder="Author" />
        <button className="button">Send</button>
      </div>
    </div>
  );
}

export default Newfeedback;
