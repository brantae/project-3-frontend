import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";


function Festival() {

    const [festival, setFestival] = useState({
        reviews: []
    })

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/festivals/${params.id}`)
        .then(res => res.json())
        .then(festival => {
            setFestival(festival)
        })
        
    }, [])


    const reviews = festival.reviews.map(review => <ReviewCard key={review.id} review={review}/>)

  return (
    
   <div>
    <h3>Ranked: #{festival.rank} best festival in Alabama</h3>
    <h3>{festival.name}</h3>
    <h3>Located in: {festival.city}, Alabama</h3>
    <h3>Typically occurs in {festival.month_of_year}</h3>
    <h3>{festival.website}</h3>
    <h3>Reviews: {reviews} </h3>
   </div>
    
  );
}

export default Festival;
