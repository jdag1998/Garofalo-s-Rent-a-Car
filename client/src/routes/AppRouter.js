import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layout from '../components/layouts/Layout'

import AccountPage from '../pages/AccountPage'
import UsersPage from '../pages/admin/UsersPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProjectPage from '../pages/ProjectPage'
import ProjectsPage from '../pages/ProjectsPage'
import RegisterPage from '../pages/RegisterPage'
import PrivateRoute from './PrivateRoutes'

export default function AppRouter() {
    return(
        
    <Router>
        <Layout />
            <Routes> 
                <Route  path="/" element={<HomePage/>} />
                <Route path= "/login" element={<LoginPage/>} />
                <Route  path= "/register" element={<PrivateRoute> <RegisterPage/> </PrivateRoute>} />
                <Route  path= "/account" element={<PrivateRoute> <AccountPage/> </PrivateRoute>} />
                <Route  path= "/projects" element={<PrivateRoute> <ProjectsPage/> </PrivateRoute>} />
                <Route  path="/project/:projectId" element={<PrivateRoute> <ProjectPage/> </PrivateRoute>} />
                <Route path= "/admin/users" element={<PrivateRoute> <UsersPage/> </PrivateRoute>} />

                <Route path= "*" element={<NotFoundPage/>} />
                
            </Routes>

</Router>
       
    )
}