import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import TryOn from "./pages/TryOn";

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-aura-cream">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Catalog />} />
          <Route path="/tryon" element={<TryOn />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/tryon" replace />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
