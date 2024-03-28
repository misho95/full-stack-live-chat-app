import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const ProtectedRouter = () => {
  const auth = false;
  const notPortectedRoutes = ["/login", "/registration"];
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!notPortectedRoutes.includes(location.pathname) && !auth) {
      navigate("/login");
    } else if (auth && notPortectedRoutes.includes(location.pathname)) {
      navigate("/");
    }
  }, [location.pathname]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRouter;
