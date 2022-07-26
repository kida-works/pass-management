import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Information from "./components/pages/Information";
import Create from "./components/pages/CreatePage";
// import firebase from "firebase";
import "ress";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/Information/:id" element={<Information />} /> */}
          <Route path="/create" element={<Create />} />
          <Route path="/information/:id" element={<Information />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
