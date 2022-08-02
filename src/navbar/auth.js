import { Routes, Route, Link } from 'react-router-dom';
import DashboardPage from '../layouts/Dashboard';
import AuthUser from '../auth/AuthUser';
import Restaurant from '../layouts/restaurant';
function Auth() {
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token !== undefined){
            logout();
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                <li className="nav-item">
                        <Link className="nav-link" to="/">Dashboard</Link>
                    </li>
                    <li className="nav-item mx-5">
                        <Link className="nav-link" to="/restaurant">Restaurant</Link>
                    </li>
                    
                    <li className="nav-item">
                        <span role="button" className="nav-link text-info" onClick={logoutUser}>Logout</span>
                    </li>

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="*" element={<DashboardPage />} />
                    <Route path="/restaurant" element={<Restaurant />} />
                </Routes>
            </div>
        </div>
    );
}

export default Auth;