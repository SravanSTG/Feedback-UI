import React, { useState } from 'react';

const FeedbackForm = () => {
    const [text, setText] = useState<string>("");

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

  return (
    <div className='card'>
        <form>
            <h2>How would you rate your service with us?</h2>
            <div className='input-group'>
                <input type="text" placeholder='Write a review' onChange={handleTextChange} value={text} />
                <button type="submit">Send</button>
            </div>
        </form>
    </div>
  )
}

export default FeedbackForm