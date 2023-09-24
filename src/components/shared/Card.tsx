import React, { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext, { FeedbackContextType } from "../../context/FeedbackContext";

type cardProps = {
  id: number;
  rating: number;
  text: string;
  reverse?: boolean;
};

const Card: React.FC<cardProps> = ({ id, rating, text }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext) as FeedbackContextType;

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback({id, rating, text})}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

export default Card;
