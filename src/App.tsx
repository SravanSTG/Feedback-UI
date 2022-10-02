import React, { MouseEventHandler, useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

interface FeedbackObject {
  id: number;
  rating: number;
  text: string;
}

const App: React.FC = () => {
  const [feedback, setFeedback] = useState<FeedbackObject[]>(FeedbackData);

  const deleteFeedback = (id: number): void => {
    if (window.confirm("Are you sure you want to delete?"))
      setFeedback(feedback.filter(item => item.id !== id));
  }

  return (
    <div className="App">
      <Header title="Feedback UI" />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </div>
  );
};

export default App;
