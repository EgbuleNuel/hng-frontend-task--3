// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import Login from "./components/Auth/Login";
import { useAuth } from "./components/Auth/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/gallery"
          element={user ? <Gallery /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

// function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
//       }
//     />
//   );
// }

export default App;
