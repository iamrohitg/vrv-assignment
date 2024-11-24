import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

//pages
import Login from "./pages/Login";
import Home from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user-management">User Management</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/user-management" element={<UserManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
