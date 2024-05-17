import Contentful from "./components/Contentful";
import DetailPage from "./components/DetailPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <div>Header</div> */}

      <Routes>
        <Route path="/" element={<Contentful itemsPerPage={6} />} />
        <Route path="/API-details/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
