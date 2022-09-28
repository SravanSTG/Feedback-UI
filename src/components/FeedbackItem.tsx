import React from "react";
import Card from "./shared/Card";

type feedbackItemProps = {
  key: number;
  rating: number;
  text: string;
};

const FeedbackItem: React.FC<feedbackItemProps> = ({ rating, text }) => {
  return <Card rating={rating} text={text} />;
};

export default FeedbackItem;
