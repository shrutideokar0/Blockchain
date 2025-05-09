import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import StudentSignup from "./pages/StudentSignup";
import StudentLogin from "./pages/StudentLogin";
import InstituteSignup from "./pages/InstituteSignup";
import InstituteLogin from "./pages/InstituteLogin";
import StudentDashboard from "./pages/StudentDashboard";
import InstituteDashboard from "./pages/InstituteDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import About from "./components/About";
import Navbar from "./components/Navbar";
import InfoSection from "./components/InfoSection";
import Services from "./components/WhyUs";
import WhyUs from "./components/Services";
import LoginLandingPage from "./components/LoginLandingPage";
import SignUpLandingPage from "./components/SignUpLandingPage";
import VerifyCertificate from "./components/VerifyCertificate";

function AppRoutes() {
  const location = useLocation();
  const showInfoSection = ["/", "/loginlanding", "/about","/service","/why","/signuplanding","/verify"].includes(location.pathname);
  const showNavbar = ["/", "/about", "/service", "/why", "/loginlanding", "/signuplanding", "/verify","/institute/login","/institute/signup","/student/login","/student/signup"].includes(location.pathname);

  return (
    <>
     {showNavbar && <Navbar />}
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/why" element={<WhyUs />} />
        <Route path="/loginlanding" element={<LoginLandingPage />} />
        <Route path="/signuplanding" element={<SignUpLandingPage />} />
        <Route path="/verify" element={<VerifyCertificate/>}/>
        {/* Public routes */}
        <Route path="/student/signup" element={<StudentSignup />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/institute/signup" element={<InstituteSignup />} />
        <Route path="/institute/login" element={<InstituteLogin />} />

        {/* Protected routes */}
        <Route
          path="/student/dashboard"
          element={<ProtectedRoute element={<StudentDashboard />} role="student" />}
        />
        <Route
          path="/institute/dashboard"
          element={<ProtectedRoute element={<InstituteDashboard />} role="institute" />}
        />
      </Routes>
      {showInfoSection && <InfoSection />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
