import React, { MouseEventHandler } from "react";
import Card from "./shared/Card";

type feedbackItemProps = {
  id: number;
  key: number;
  rating: number;
  text: string;
  handleDelete: (id: number) => void;
};

const FeedbackItem: React.FC<feedbackItemProps> = ({ id, rating, text, handleDelete }) => {
  return <Card id={id} rating={rating} text={text} handleDelete={handleDelete} />;
};

export default FeedbackItem;
