import Contentful from "./components/Contentful";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <div>Header</div>
      <Navbar/>
      <div className="flex row">

        <Contentful itemsPerPage={6} />
      </div>
    </>
  );
}

export default App;
