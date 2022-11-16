import {Navigate} from 'react-router-dom'
import useAuth from '../auth/useAuth';

const PrivateRoute = ({hasRole: role, rest}) => {

    const {user} = useAuth(); 

if (role && user?.role !== role) return <Navigate to="/" />

if(!user) return<Navigate to="/login" />
return rest

};



export default PrivateRoute