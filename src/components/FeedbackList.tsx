import React from "react";
import FeedbackItem from "./FeedbackItem";

interface FeedbackObject {
  id: number;
  rating: number;
  text: string;
}

interface FeedbackProps {
  feedback: FeedbackObject[];
}

const FeedbackList: React.FC<FeedbackProps> = ({ feedback }) => {
  return (
    <div>
      {feedback.map((item) => {
        return (
          <FeedbackItem key={item.id} rating={item.rating} text={item.text} />
        );
      })}
    </div>
  );
};

export default FeedbackList;
