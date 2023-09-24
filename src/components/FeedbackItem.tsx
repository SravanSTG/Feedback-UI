import React from "react";
import Card from "./shared/Card";

type feedbackItemProps = {
  id: number;
  key: number;
  rating: number;
  text: string;
};

const FeedbackItem: React.FC<feedbackItemProps> = ({
  id,
  rating,
  text,
}) => {
  return (
    <Card id={id} rating={rating} text={text} />
  );
};

export default FeedbackItem;
