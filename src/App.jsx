import Contentful from "./components/Contentful";
import NavbarTop from "./components/NavbarTop";
import NavbarLeft from "./components/NavbarLeft";
import "./App.css";

function App() {
  return (
    <>
      <div>Header</div>
      <NavbarTop/>
      <div className="flex row">
    	  <NavbarLeft/>
        <Contentful itemsPerPage={6} />
      </div>
    </>
  );
}

export default App;
