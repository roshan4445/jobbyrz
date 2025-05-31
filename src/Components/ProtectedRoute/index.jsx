import "./index.css";
import { Navigate } from "react-router";
import Cookies from "js-cookie";
const ProtectedRoute = ({children}) => {
    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken === undefined) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;