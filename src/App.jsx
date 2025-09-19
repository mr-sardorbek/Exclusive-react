import "./index.css";
import { Routes, Route } from "react-router-dom";

import Banner from "./components/banner";
import Navbar from "./components/navbar";
import HomePage from "./pages/home-page";
import Footer from "./components/footer";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <div className="flex flex-col justify-between" >
      <header>
        <Banner />
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

