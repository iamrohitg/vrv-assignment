import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "@/components/shared/Layout";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes with Layout */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/user-management"
          element={
            <Layout>
              <UserManagement />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
