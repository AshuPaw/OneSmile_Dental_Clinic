import Cookies from "js-cookie";
import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import { toast } from 'react-toastify';
import axios from "axios"
function Feedback() {
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Rating:", rating);
    console.log("Notes:", notes);
  


   // Make Axios POST request
   axios.post(`http://localhost:8087/feedback/addfeedback`, {
    ratings:rating,
    message:notes,
    usertable:{uid:Cookies.get('usersetid')}

  })
  .then(response => {
   // alert("feedback successfully Submitted");
    toast.success("feedback successfully Submitted")
    
     // Handle successful response
  })
  .catch(error => {
    console.error('Error:', error); // Handle error
  });
};


  return (
    <div className="feedback-container text-center">
      <h1 className="title">Feedback</h1>
      <form onSubmit={handleSubmit} className="d-inline-block">
        <div className="form-group">
          <Rating
            count={5}
            onChange={handleRatingChange}
            size={80} // Increased size of stars
            activeColor="#ffd700"
            isHalf={false} // Change this to true if you want to allow half star ratings
          />
        </div>
        <div className="form-group">
          <textarea
            id="notes"
            value={notes}
            onChange={handleNotesChange}
            className="form-control"
            placeholder="Enter your Suggestions"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4 mb-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Feedback;
