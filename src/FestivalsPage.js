import React from "react";
import AllFestivalsRendered from "./AllFestivalsRendered";



function FestivalsPage({ festivals, setFestivals }) {

    console.log(festivals)

    // function handleReviewDelete(id) {
    //     console.log("deleting...")
    //     fetch(`http://localhost:9292/reviews/${id}`, {
    //         method: "DELETE",
    //     })
    //     .then(() => onReviewDelete(id))
    // }

    // function onReviewDelete(id) {
    //     const updatedReviews = festivals.reviews.filter((f) => f.id !== id)
    //     setFestivals({...festivals, reviews: updatedReviews})
    // }

    // function handleAddReview(newReview) {
    //     setFestivals({...festivals, reviews: [...festivals.reviews, newReview]})
    // }




    return (
        
        <div>
            <AllFestivalsRendered festivals={festivals}/>
        </div>
            
    );
}

export default FestivalsPage;
