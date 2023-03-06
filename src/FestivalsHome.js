import React, { useEffect, useState } from 'react'
import FestivalLink from './FestivalLink'

function FestivalsHome({festivals}) {

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