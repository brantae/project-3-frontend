import React from 'react'
import EditReview from './EditReview'

function ReviewCard({ review, onReviewDelete, onReviewEdit }) {

    const { id, comment } = review

    function handleDeleteClick() {
        onReviewDelete(id)
    }




    return (
        <div>
            <br></br>
            <p> ~{comment}~ </p>
            <EditReview
                key = {id}
                id= {id}
                onReviewEdit = {onReviewEdit} 
                />
            <button onClick={handleDeleteClick}>Delete Review</button>
        </div>
    )
}

export default ReviewCard;