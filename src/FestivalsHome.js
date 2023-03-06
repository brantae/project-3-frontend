import React, { useEffect, useState } from 'react'
import FestivalLink from './FestivalLink'

function FestivalsHome() {

    const [festivals, setFestivals] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/festivals")
        .then((r) => r.json())
        .then((festivals) => setFestivals(festivals))
    }, [])

    const festivalList = festivals.map( festival => <FestivalLink key={festival.id} festival={festival}/>)

    return (
        <div>
            <h1> festivals of bama </h1>
            <ul>
             {festivalList}
            </ul>
        </div>
    )
}

export default FestivalsHome;