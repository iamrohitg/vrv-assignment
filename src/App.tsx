import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//pages
import Login from "./pages/Login";
import Home from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/user-management" element={<UserManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
