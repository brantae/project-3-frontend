import React from "react";
import { Link } from "react-router-dom";

function FestivalLink({festival}) {


  return (
    <div>
        <Link to={`/festivals/${festival.id}`}>
            <h3>{festival.name}</h3>
        </Link>
    </div>
  );
}

export default FestivalLink;