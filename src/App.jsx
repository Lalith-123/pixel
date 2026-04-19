import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import HomePage from "./HomePage";
import GetInTouch from "./GetInTouch";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 Add this */}
      <Routes>
        <Route
          path="/pixel/"
          element={
            <div className="bg-gradient-to-t from-[#2b261a] via-[#121212] to-[#121212]">
              <HomePage />
            </div>
          }
        />
        <Route
          path="/pixel/contactUs"
          element={<GetInTouch mode="enquiry" />}
        />
        <Route
          path="/pixel/becomePartner"
          element={<GetInTouch mode="partner" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
