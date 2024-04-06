import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";

import "../styles/App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
