import React from 'react'

function ReviewCard({ review, onReviewDelete }) {

    const { id, comment } = review

    function handleDeleteClick() {
        onReviewDelete(id)
    }


    return (
        <div>
            <br></br>
            <p> ~{comment}~ </p>
            <button onClick={handleDeleteClick}>Delete Review</button>
        </div>
    )
}

export default ReviewCard;