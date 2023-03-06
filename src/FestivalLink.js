import React from "react";
import { Link } from "react-router-dom";

function FestivalLink( props ) {

  const { festival } = props

  return (
    <div>
        <Link to={`/festivals/${festival.id}`}>
            <h3>{festival.name}</h3>
            <br></br>
        </Link>
    </div>
  );
}

export default FestivalLink;