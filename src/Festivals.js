import React, { useEffect, useState } from 'react'

function Festivals() {

    const [festivals, setFestivals] = useState([])
    const [festivalForm, setFestivalForm] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/festivals")
        .then((r) => r.json())
        .then((festivals) => setFestivals(festivals))
    }, [])

    return (
        <div>
            <h1> festivals go here </h1>
            <p> put out all festivals on this page </p>
        </div>
    )
}

export default Festivals;