import React, { useState } from 'react'
import { Form } from "semantic-ui-react";

function ReviewForm({ onAddReview, festival_id }) {

  

    const [newReview, setNewReview] = useState({
        comment: '',
        festival_id: festival_id
    })
    

    function handleChangeReview(event) {
        setNewReview({
            ...newReview, [event.target.name]: event.target.value
        })
    }

    function handleReviewSubmit(e) {
        e.preventDefault()
        
        const newReviewData = {
            comment: newReview.comment,
            festival_id: newReview.festival_id
        }

        fetch('http://localhost:9292/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReviewData),
        })
        .then((res) => res.json())
        .then((data) => onAddReview(data))

        setNewReview({
            comment:''
        })
    }



    return (
        <div className='form'>
            <Form onSubmit={handleReviewSubmit}>
                <Form.Group>
                    <Form.Input
                        label="add your review!"
                        placeholder="enter your review here"
                        name="comment"
                        value={newReview.comment}
                        onChange={handleChangeReview} 
                        />
                    </Form.Group>
                <Form.Button>submit</Form.Button>
            </Form>
        </div>
    )
}

export default ReviewForm;