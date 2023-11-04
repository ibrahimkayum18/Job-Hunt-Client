import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(!user){
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }

    return children;
};

export default PrivateRouter;