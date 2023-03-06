import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import FestivalsHome from "./FestivalsHome";
import Home from "./Home";
import Error from "./Error";
import FestivalItem from "./FestivalItem";

function App() {

  const [festivals, setFestivals] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/festivals")
    .then((r) => r.json())
    .then((festivals) => setFestivals(festivals))
}, [])

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element = {<Home />}/>
          <Route exact path="/festivals" element={<FestivalsHome festivals={festivals} setFestivals={setFestivals}/>}/>
          <Route path="/festivals/:id" element = {<FestivalItem festivals={festivals}/>}/>
          <Route path="/*" element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
