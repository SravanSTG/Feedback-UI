import React from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";

const App: React.FC = () => {
  return (
    <FeedbackProvider>
      <div className="App">
        <Header title="Feedback UI" />
        <div className="container">
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </div>
      </div>
    </FeedbackProvider>
  );
};

export default App;
