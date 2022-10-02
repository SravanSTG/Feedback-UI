import React, { MouseEventHandler } from "react";
import FeedbackItem from "./FeedbackItem";

interface FeedbackObject {
  id: number;
  rating: number;
  text: string;
}

interface FeedbackProps {
  feedback: FeedbackObject[];
  handleDelete: (id: number) => void;
}

const FeedbackList: React.FC<FeedbackProps> = ({ feedback, handleDelete }) => {
  return (
    <div>
      {feedback.length > 0 ? feedback.map((item) => {
        return (
          <FeedbackItem key={item.id} id={item.id} rating={item.rating} text={item.text} handleDelete={handleDelete} />
        );
      }) : <p>No Feedback Yet</p>}
    </div>
  );
};

export default FeedbackList;
