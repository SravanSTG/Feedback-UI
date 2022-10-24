import React from "react";
import FeedbackItem from "./FeedbackItem";
import { FeedbackObject } from "../interfaces";

type FeedbackListProps = {
  feedback: FeedbackObject[];
  handleDelete: (id: number) => void;
};

const FeedbackList: React.FC<FeedbackListProps> = ({
  feedback,
  handleDelete,
}) => {
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
              handleDelete={handleDelete}
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
