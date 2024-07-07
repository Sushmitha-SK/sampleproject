import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
import CheckEmail from "./pages/CheckEmail";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>


          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/checkemail" element={<CheckEmail />} />
          <Route path="/changepassword/:token" element={<ChangePassword />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
