import Contentful from "./components/Contentful";
import "./App.css";

function App() {
  return (
    <>
      <div>Header</div>
      <div>
        <Contentful itemsPerPage={6} />
      </div>
    </>
  );
}

export default App;
