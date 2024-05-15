import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const loacation = useLocation();


    if(loading){
        return <div className="h-screen w-full flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>;
    }

    if(user){
        return children;
    }

    return <Navigate state={loacation.pathname} to="/login" />;
};

export default PrivateRoute;