import React, { useState, useEffect } from 'react'

function ReviewCard({ review }) {

    const { comment } = review

    function handleDeleteClick() {

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