import { useEffect, useState } from "react";
import NewFeedback from "../../components/newFeedback/newFeedback";
import Feedback from "../../components/feedback/feedback";
import FeedbackService from "../../services/feedback";
import dayjs from "dayjs";
import "./home.css";

function Home() {
  const [feedbacks, setFeedbacks] = useState([]);

  const getFeedbacks = () => {
    FeedbackService.getAll().then((response) => {
      setFeedbacks(response.data);
    });
  };

  const createComponents = () => {
    let components = [];

    feedbacks.forEach((element, index) => {
      components.push(
        <Feedback
          id={element.id}
          feedback={element.feedback}
          author={element.author}
          startedDate={dayjs(element.date).format("DD/MM/YY")}
          key={index}
        />
      );
    });

    return components;
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div className="home-flex">
      <div className="home-flex-column">
        <NewFeedback />
      </div>
      <div className="scroll home-flex-column">{createComponents()}</div>
    </div>
  );
}

export default Home;
