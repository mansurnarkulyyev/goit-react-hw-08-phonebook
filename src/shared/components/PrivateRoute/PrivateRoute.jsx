import { Navigate, Outlet } from "react-router-dom";
import useIsLogin from "../../hooks/useLogin.js";

const PrivateRoute = () => {
  const isLogin = useIsLogin();
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default PrivateRoute;
