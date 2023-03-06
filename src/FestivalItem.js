import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";


function FestivalItem() {

    const [festival, setFestival] = useState({
        reviews: []
    })
    const [reviewForm, setReviewForm] = useState(false)

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/festivals/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setFestival(data)
        })
        
    }, [])

    

    const reviews = festival.reviews.map(review => <ReviewCard key={review.id} review={review}/>)

    return (
        
        <div>
            <h1>{festival.name}</h1>
            <h3>Located in: {festival.city}, Alabama</h3>
            <h3>Typically occurs in {festival.month}</h3>
            <h3>{festival.website}</h3>
            <br></br>
            <h1>Reviews:</h1>
            <h3>{reviews}</h3>
        </div>
            
    );
}

export default FestivalItem;