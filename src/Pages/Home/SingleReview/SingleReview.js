import { Rating } from '@mui/material';
import React from 'react';
import './SingleReview.css'

const SingleReview = (props) => {
    const {name,userProfile,review,ratting} = props.review;
    return (
        <div className='review'>
            <div className="review-user">
                {userProfile && <img src={userProfile} alt="userProfile"/>}
                {!userProfile && <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="userProfile"/>}
                <p>{name}</p>
            </div>
            <div className="review-ratting">
                <h6>{review}</h6>
                <Rating 
                     name="read-only"
                     value={ratting}
                /> 
                <h6>{ratting} of 5</h6>
                
            </div>
            
            
        </div>
    );
};

export default SingleReview;