import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import TryOn from "./pages/TryOn";

export default function App() {
  return (
    <div className="min-h-screen bg-aura-cream">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Catalog />} />
        <Route path="/tryon" element={<TryOn />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/tryon" replace />} />
      </Routes>
    </div>
  );
}
