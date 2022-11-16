import {Navigate} from 'react-router-dom'
import useAuth from '../auth/useAuth';

const PrivateRoute = ({children}) => {

    let {user1} = useAuth(); 



if(!user1) return<Navigate to="/login" />
return children

};

// export default function PrivateRoute(props){
//     return(
//         <Routes>
//         <Route {...props} />
//         </Routes>
//     )
// }

export default PrivateRoute