import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./components/layout/layout.jsx";

import Home from "./components/pages/Home.jsx";
import Consultancy from "./components/pages/Consultancy.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="consultorias" element={<Consultancy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
