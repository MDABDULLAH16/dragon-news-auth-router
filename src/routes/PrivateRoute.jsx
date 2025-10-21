import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user,   } = use(AuthContext);
  const location = useLocation();
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl font-semibold">
//         Loading...
//       </div>
//     );
//   }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
