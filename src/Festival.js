import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Festival(props) {
    const [festival, setFestival] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/festivals/${params.id}`)
        .then((r) => r.json())
        .then(festival => {
            console.log(festival)
            setFestival(festival)
        })
    }, [])

  return (
    
   <div>
    <h3>Ranked: #{festival.rank} best festival in Alabama</h3>
    <h3>{festival.name}</h3>
    <h3>Located in: {festival.city}, Alabama</h3>
    <h3>Typically occurs in {festival.month_of_year}</h3>
    <h3>{festival.website}</h3>
   </div>
    
  );
}

export default Festival;
