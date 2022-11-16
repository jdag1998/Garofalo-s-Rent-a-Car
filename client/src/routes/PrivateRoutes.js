import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {

const user = false; 

if(!user) return<Navigate to="/login" />
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