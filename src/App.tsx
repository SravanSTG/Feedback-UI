import React, { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";

interface FeedbackObject {
  id: number;
  rating: number;
  text: string;
}

const App: React.FC = () => {
  const [feedback, setFeedback] = useState<FeedbackObject[]>(FeedbackData);

  return (
    <div className="App">
      <Header title="Feedback UI" />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </div>
  );
};

export default App;
