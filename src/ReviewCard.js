import React, { useState, useEffect } from 'react'

function ReviewCard({review}) {

    const { comment } = review




    return (
        <div>
            <p> {comment} </p>
        </div>
    )
}

export default ReviewCard;