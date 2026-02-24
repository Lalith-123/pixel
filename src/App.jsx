import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import GetInTouch from "./GetInTouch";

function App() {
  return (
    // <div className="bg-gradient-to-t from-[#2b261a] via-[#121212] to-[#121212]">
    //   <HomePage />
    // </div>
    <Router>
      {/* <nav className="p-4 bg-gray-100 space-x-4">
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-blue-500 hover:underline">
          GetInTouch
        </Link>
      </nav> */}
      <Routes>
        <Route
          path="/pixel/"
          element={
            <div className="bg-gradient-to-t from-[#2b261a] via-[#121212] to-[#121212]">
              <HomePage />
            </div>
          }
        />
        <Route path="/pixel/contactUs" element={<GetInTouch />} />
      </Routes>
    </Router>
  );
}

export default App;
