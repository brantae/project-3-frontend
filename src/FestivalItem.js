import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function FestivalItem({ festivals, setFestivals }) {

    const { id } = useParams()
    

    const [festival, setFestival] = useState({
        name: "",
        city: "",
        month: "",
        name: "",
        reviews: [],
        website: ""
    })

    useEffect(() => {
        if (festivals.length > 0) {
            const currentFestival = festivals.find((f) =>
            f.id === parseInt(id)
            
        )
        console.log(currentFestival)

            setFestival(currentFestival)
        }
    }, [festivals])

    function handleEditReview(editedReview) {
    
        const updatedReviews = festivals.reviews.map((review) => {
            if (review.id === editedReview.id) {
                return editedReview
            }
            return review
        })
    
        setFestivals({...festivals, reviews: updatedReviews})
    
    }

    function handleReviewDelete(id) {
        console.log("deleting...")
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "DELETE",
        })
        .then(() => onReviewDelete(id))
    }

    function onReviewDelete(id) {
    
        const updatedReviews = festivals.reviews.filter((f) => f.id !== id)
        setFestivals({...festivals, reviews: updatedReviews})
        }
    

    function handleAddReview(newReview) {
        setFestivals({...festivals, reviews: [...festivals.reviews, newReview]})
    }


    const reviews = festival.reviews.map(review => 
        <ReviewCard
        festivals={festivals} 
        review={review}
        key={review.id}
        onReviewEdit={handleEditReview}
        onReviewDelete={handleReviewDelete}/>)

    
    return (
        <div>
            
            <h1>{festival.name}</h1>
            <h3>Located in: {festival.city}, Alabama</h3>
            <h3>Typically occurs in {festival.month}</h3>
            <h3>Visit their site: {festival.website}</h3>
            <h1>Reviews:</h1>
            <h3>{reviews}</h3>
            <ReviewForm onAddReview={handleAddReview}/>
        </div>
    
    );
}

export default FestivalItem;