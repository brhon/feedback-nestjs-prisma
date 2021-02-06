import NewFeedback from "../../components/newFeedback/newFeedback";
import Feedback from "../../components/feedback/feedback";
import "./home.css";

function Home() {
  const feedback =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet sit suspendisse arcu fames faucibus. Sit leo id vulputate pulvinar et ligula mauris aliquet. Nunc, montes, sagittis nibh diam eget at. In non nec ac adipiscing auctor. Et sapien lectus ullamcorper risus vulputate adipiscing blandit neque, ut. Morbi amet vitae.";
  return (
    <div className="home-flex">
      <div className="home-flex-column">
        <NewFeedback />
      </div>
      <div className="scroll home-flex-column">
        <Feedback feedback={feedback} startedDate="01/01/01" author="kisho" />
        <Feedback feedback={feedback} />
        <Feedback feedback={feedback} />
        <Feedback feedback={feedback} />
        <Feedback feedback={feedback} />
        <Feedback feedback={feedback} />
        <Feedback feedback={feedback} />
        <Feedback feedback={feedback} />
        <Feedback feedback={feedback} />
        <Feedback feedback={feedback} />
        <Feedback feedback={feedback} />
        <Feedback feedback={feedback} />
        <Feedback feedback={feedback} />
        <Feedback feedback={feedback} />
      </div>
    </div>
  );
}

export default Home;
