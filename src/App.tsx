import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
// import { RequireAuth } from "./Global/Require_Auth";
import DashboardWrapper from "./pages/Admin/Wrapper";
import { Dashboard } from "./pages/Admin/Dashboard";
import Businesses from "./pages/Admin/Subroutes/Businesses";
import Products from "./pages/Admin/Subroutes/Products";
import Settings from "./pages/Admin/Subroutes/Settings";
import User from "./pages/Admin/Subroutes/User";
import Transactions from "./pages/Admin/Subroutes/Transactions";
// import { AuthProvider } from "./hooks/useAuth";
import Dashboard_Home from "./pages/Admin/Subroutes/Dashboard-Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            // <AuthProvider>
            //   <RequireAuth>
            //   </RequireAuth>
            // </AuthProvider>
            <DashboardWrapper>
              <Dashboard />
            </DashboardWrapper>
          }
        >
          <Route index path="dashboard" element={<Dashboard_Home />} />
          <Route path="businesses" element={<Businesses />} />
          <Route path="products" element={<Products />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<User />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
