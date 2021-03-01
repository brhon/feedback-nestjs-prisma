import React, { useState } from "react";
import FeedbackService from "../../services/feedback";
import "./newFeedback.css";

function Newfeedback() {
    const [formFeedback, setFeedback] = useState("");
    const [formAuthor, setAuthor] = useState("");

    const submit = (event) => {
        const data = {
            feedback: formFeedback,
            author: formAuthor,
        };

        FeedbackService.addNewFeedback(data).then((response) => {
            console.log(response);
            window.location.reload();
            return false;
        });
        return false;
    };

    return (
        <form onSubmit={submit}>
            <div className="display">
                <p className="text">🌱 Leave new feedback</p>
                <textarea
                    className="textarea"
                    value={formFeedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                ></textarea>
                <div className="flex-author-send">
                    <input
                        className="author-input"
                        placeholder="Author"
                        value={formAuthor}
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
