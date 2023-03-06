import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import FestivalsHome from "./FestivalsHome";
import Reviews from "./Reviews";
import Error from "./Error";
import Festival from "./Festival";
import FestivalForm from "./FestivalForm";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<FestivalsHome/>}/>
          <Route path="/reviews" element = {<Reviews />}/>
          <Route path="/festivals/:id" element = {<Festival />}/>
          <Route path="/*" element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
