import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Error from "./Error";
import FestivalsPage from "./FestivalsPage";
import FestivalItem from "./FestivalItem";

function App() {

  const [festivals, setFestivals] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:9292/festivals")
    .then((r) => r.json())
    .then((data) => {
      console.log(data)
      setFestivals(data)
    })
}, [])


  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element = {<HomePage />}/>
          <Route exact path="/festivals" element={<FestivalsPage festivals={festivals} setFestivals={setFestivals}/>}/>
          <Route path="/festivals/:id" element = {<FestivalItem festivals={festivals} setFestivals={setFestivals}/>}/>
          <Route path="/*" element={<Error />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
