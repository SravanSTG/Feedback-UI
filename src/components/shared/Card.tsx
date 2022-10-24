import React from "react";
import { FaTimes } from "react-icons/fa";

type cardProps = {
  id: number;
  rating: number;
  text: string;
  reverse?: boolean;
  handleDelete: (id: number) => void;
};

const Card: React.FC<cardProps> = ({ id, rating, text, handleDelete }) => {
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => handleDelete(id)}>
        <FaTimes />
      </button>
      <div className="text-display">{text}</div>
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

export default Card;
