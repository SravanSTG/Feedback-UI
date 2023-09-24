import React, { createContext, useState, ReactNode } from "react";
import { FeedbackObject } from "../interfaces";
import FeedbackData from "../data/FeedbackData";

interface Props {
  children?: ReactNode;
}

type feedbackEditType = {
  item: {
    id: number,
    rating: number,
    text: string,
  },
  edit: boolean
}

export interface FeedbackContextType {
  feedback: FeedbackObject[],
  feedbackEdit: feedbackEditType,
  addFeedback: (newFeedback: FeedbackObject) => void,
  deleteFeedback: (id: number) => void,
  editFeedback: (item: FeedbackObject) => void,
  updateFeedback: (id: number, item: FeedbackObject) => void,
}

const FeedbackContext = createContext<FeedbackContextType | null >(null);

export const FeedbackProvider: React.FC<Props> = ({ children }) => {
  const [feedback, setFeedback] = useState<FeedbackObject[]>(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState<feedbackEditType>({
    item: {
      id: 0,
      rating: 0,
      text: "",
    },
    edit: false,
  })

  const addFeedback = (newFeedback: FeedbackObject) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id: number): void => {
    if (window.confirm("Are you sure you want to delete?"))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  const editFeedback = (item: FeedbackObject): void => {
    setFeedbackEdit({
      item: item,
      edit: true
    });
  }

  const updateFeedback = (id: number, updItem: FeedbackObject): void =>  {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item )));
    setFeedbackEdit({
      item: {
        id: 0,
        rating: 0,
        text: "",
      },
      edit: false,
    })
  }

  return (
    <FeedbackContext.Provider value={{feedback, feedbackEdit, addFeedback, deleteFeedback, editFeedback, updateFeedback}}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
