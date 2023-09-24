import React, { useState, useContext, useEffect } from "react";
import FeedbackContext, { FeedbackContextType } from "../context/FeedbackContext";

type ratingSelectProps = {
  select: (rating: number) => void;
};

const RatingSelect: React.FC<ratingSelectProps> = ({ select }) => {
  const [selected, setSelected] = useState<number>(10);

  const { feedbackEdit } = useContext(FeedbackContext) as FeedbackContextType;

  useEffect(() => {
    if (feedbackEdit.edit) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit.edit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(parseInt(e.target.value));
    select(parseInt(e.target.value));
  };

  const radioButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ul className="rating">
      {radioButtons.map((num, index) => (
        <li key={index}>
          <input
            type="radio"
            id={`num${num}`}
            name="rating"
            value={`${num}`}
            onChange={handleChange}
            checked={selected === num}
          />
          <label htmlFor={`num${num}`}>{`${num}`}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
