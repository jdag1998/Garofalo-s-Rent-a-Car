import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import roles from '../helpers/roles'
import routes from '../helpers/routes'

import AccountPage from '../pages/AccountPage'
import UsersPage from '../pages/admin/UsersPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProjectPage from '../pages/ProjectPage'
import ProjectsPage from '../pages/ProjectsPage'
import RegisterPage from '../pages/RegisterPage'
import PrivateRoute from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'


export default function AppRouter() {
    return(
        
    <Router>
        <Layout />
            <Routes> 
                <Route  path={routes.home} element={ <HomePage/>} />
                <Route  path= {routes.login} element={<PublicRoutes><LoginPage/></PublicRoutes>} />
                <Route  path= {routes.register} element={<PublicRoutes><RegisterPage/></PublicRoutes> } />
                <Route  path= {routes.account}element={<PrivateRoute> <AccountPage/> </PrivateRoute>} />
                <Route  path= {routes.projects} element={<PrivateRoute> <ProjectsPage/> </PrivateRoute>} />
                <Route  path={routes.project()} element={<PrivateRoute> <ProjectPage/> </PrivateRoute>} />
                <Route hasRole={roles.admin}path={routes.admin.users} element={<PrivateRoute> <UsersPage/> </PrivateRoute>} />

                <Route path= "*" element={<NotFoundPage/>} />
                
            </Routes>

</Router>
       
    )
}