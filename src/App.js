import Header from "modules/Header";
import UserRoutes from "UserRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrent } from "redux/auth/auth-operation";

const App = () => {
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <UserRoutes/>
      
    </div>
  );
};

export default App;
