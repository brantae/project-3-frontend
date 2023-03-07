import React, { useEffect, useState } from 'react'
import FestivalLink from './FestivalLink'
import FestivalForm from './FestivalForm'


function FestivalsHome({ festivals, setFestivals }) {

    const festivalList = festivals.map( festival => <FestivalLink key={festival.id} festival={festival}/>)

    function handleAddFestival(newFestival) {
        setFestivals([...festivals, newFestival])
    }




    return (
        <div>
            <h1> festivals of bama 🤠 </h1>
            <ul>
                {festivalList}
            </ul>
            <FestivalForm onAddFestival={handleAddFestival} festivals={festivals}/>
    </div>
        )
}

export default FestivalsHome;