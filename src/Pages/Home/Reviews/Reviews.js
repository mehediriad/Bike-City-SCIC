import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews , setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://protected-mountain-42023.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data=>setReviews(data))
    },[]);
    console.log(reviews)
    return (
        <Container>
            <div className="featured-bike-heading mt-5 mb-5">
                    <span><FontAwesomeIcon icon={faCommentDots}/></span>
                    <h5>TAKING RIDES TO A NEWER LEVEL</h5>
                    <h1 className="text-uppercase">Our Client Reviews</h1>
                    <p className="w-50 text-muted mx-auto ">Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip exa comds
                        consequat duis aute irure dolor repreh enderit in voluptate velit esse cilum.</p>
               </div>
               <div className="text-center">
                    {
                        reviews.map(review=><SingleReview
                            key ={review._id}
                            review = {review}
                        ></SingleReview>)
                    }

               </div>
            
        </Container>
    );
};

export default Reviews;