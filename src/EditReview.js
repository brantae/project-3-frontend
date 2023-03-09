import React, { useState } from "react";

function EditReview({ onReviewEdit, id }) {

    const [newComment, setNewComment] = useState("")

    function handleEdit(e) {
        e.preventDefault()

        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                comment: newComment
            })
        })
        .then((res) => res.json())
        .then((data) => onReviewEdit(data))

        setNewComment("")

    }

    function handleChange(e) {
        setNewComment(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleEdit}>
                <input 
                    type="text" 
                    placeholder="edit review if you wish" 
                    onChange={handleChange}
                    value={newComment}/>
                    <button type="submit">Complete Edit</button>
            </form>
        </div>
    );
}

export default EditReview;