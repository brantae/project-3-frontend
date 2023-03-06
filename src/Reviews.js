import React, { useState, useEffect } from 'react'
import ReviewLink from './ReviewLink'

function Reviews() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/reviews")
        .then((r) => r.json())
        .then((reviews) => setReviews(reviews))
    }, [])

    const reviewList = reviews.map(review => 
        <ReviewLink key={review.id} review={review}/>
    )

    return (
        <div>
            <h1> festival reviews </h1>
            <p> {reviewList} </p>
        </div>
    )
}

export default Reviews;