import Contentful from "./components/Contentful";

import NavbarTop from "./components/NavbarTop";
import NavbarLeft from "./components/NavbarLeft";
=======
import DetailPage from "./components/DetailPage";

import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>Header</div>

      <NavbarTop/>
      <div className="flex row">
    	  <NavbarLeft/>
        <Contentful itemsPerPage={6} />

      <div>
        <Routes>
          <Route path="/" element={<Contentful itemsPerPage={6} />} />
          <Route path="/API-details/:id" element={<DetailPage />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
