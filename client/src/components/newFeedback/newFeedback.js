import React, { useState } from "react";
import "./newFeedback.css";

function Newfeedback() {
  const [feedback, setFeedback] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <form>
      <div className="display">
        <p className="text">🌱 Leave new feedback</p>
        <textarea
          className="textarea"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>
        <div className="flex-author-send">
          <input
            className="author-input"
            placeholder="Author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            required
          />
          <input type="submit" className="button" value="Send" />
        </div>
      </div>
    </form>
  );
}

export default Newfeedback;
