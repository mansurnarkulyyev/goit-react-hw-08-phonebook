import { Navigate, Outlet } from "react-router-dom";
import useIsLogin from "../../hooks/useLogin.js";

const PublikRoute = () => {
  const isLogin = useIsLogin();
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};
export default PublikRoute;
