import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext, { FeedbackContextType } from "../context/FeedbackContext";

const FeedbackList: React.FC = () => {
  const { feedback } = useContext(FeedbackContext) as FeedbackContextType;

  return (
    <div>
      {feedback.length > 0 ? (
        feedback.map((item) => {
          return (
            <FeedbackItem
              key={item.id}
              id={item.id}
              rating={item.rating}
              text={item.text}
            />
          );
        })
      ) : (
        <p>No Feedback Yet</p>
      )}
    </div>
  );
};

export default FeedbackList;
