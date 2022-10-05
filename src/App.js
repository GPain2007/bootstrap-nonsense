import React, { useState } from "react";

import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { ourServices } from "./pages/ourServices";
import SideBar from "./components/nav/nav";

function App() {
  const [show, setShow] = useState(true);
  return (
    <Router>
      <SideBar show={show} setShow={setShow} />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home show={show} />} />
        <Route path={ROUTES.OURSERVICES} element={<ourServices />} />
      </Routes>
    </Router>
  );
}

export default App;
