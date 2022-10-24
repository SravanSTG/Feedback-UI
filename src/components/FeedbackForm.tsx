import React, { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import { FeedbackObject } from "../interfaces";

type feedbackFormProps = {
  feedback: FeedbackObject[];
  handleAdd: (newFeedback: FeedbackObject) => void;
};

const FeedbackForm: React.FC<feedbackFormProps> = ({ feedback, handleAdd }) => {
  const [text, setText] = useState<string>("");
  const [rating, setRating] = useState<number>(10);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage("");
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be atleast 10 characters");
    } else {
      setMessage("");
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        id: feedback.length + 1,
        text: text,
        rating: rating,
      };

      handleAdd(newFeedback);
      setText("");
    }
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating: number) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button
            type="submit"
            text="Send"
            version="primary"
            isDisabled={btnDisabled}
          />
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
};

export default FeedbackForm;
