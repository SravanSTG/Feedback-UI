import React from 'react';

interface FeedbackObject {
    id: number;
    rating: number;
    text: string;
}

type FeedbackStatProps = {
    feedback: FeedbackObject[];
}

const FeedbackStats: React.FC<FeedbackStatProps> = ( {feedback} ) => {
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating;
    }, 0) / feedback.length;

    average = Number(average.toFixed(1).replace(/[.,]0$/, ''));

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats