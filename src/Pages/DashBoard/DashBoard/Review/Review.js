import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';

const Review = () => {
    const [reviewData , setReviewData] = useState({});
    const [success , setSuccess] = useState(false);
    const {user} = useAuth();
    console.log(user)
    const handleOnChange = e =>{
        console.log(e.target.value)
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = {...reviewData};
        newReviewData[field] = value;
        setReviewData(newReviewData);
        console.log(newReviewData)
    }
    const handleReviewSubmit = e =>{
        let reviewInfo = {name:user.displayName, email:user.email, userProfile:user.photoURL , ...reviewData}
        console.log(reviewInfo);
        fetch('https://protected-mountain-42023.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
        .then(res => res.json())
        .then(data =>{
            if (data.insertedId) {
               setSuccess(true);
               alert('Your Review Added Successfully!!')
            }
        })
        


        e.preventDefault();
    }
    return (
        <div className="w-75">
            <h2>Review Our Site</h2>
            <form onSubmit={handleReviewSubmit}>
                <div className="mb-3">
                    <textarea required onChange={handleOnChange} name="review" className="form-control" placeholder="Write Something..."></textarea>
                    <input required onChange={handleOnChange} name="ratting" className="w-100" type="range" min="0" max="5"/>
                    <h6>Ratting: {reviewData.ratting || 0}</h6>
                </div>
                <button type="submit" className="btn btn-primary">Review</button>
            </form>
            <br/>
            
            {success && <Alert variant='success'> Your Review Added Successfully!</Alert>}
        </div>
    );
};

export default Review;