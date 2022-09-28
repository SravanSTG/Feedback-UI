import React from "react";

type cardProps = {
  rating: number;
  text: string;
  reverse?: boolean;
};

const Card: React.FC<cardProps> = ({ rating, text }) => {
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

export default Card;
