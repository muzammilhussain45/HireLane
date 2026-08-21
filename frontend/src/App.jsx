import React, { useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SquareArrowUp } from "lucide-react";

import Home from "./pages/Home";

function App() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
