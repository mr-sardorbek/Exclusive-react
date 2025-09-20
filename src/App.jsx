import "./index.css";
import { Routes, Route } from "react-router-dom";

import Banner from "./components/banner";
import Navbar from "./components/navbar";
import HomePage from "./pages/home-page";
import Footer from "./components/footer";
import SignUp from "./pages/sign-up";
import LogIn from "./pages/log-in";

function App() {
  return (
    <div className="flex flex-col min-h-screen" >
      <header>
        <Banner />
        <Navbar />
      </header>

      <main className="flex-grow flex items-center justify-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn/>} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

