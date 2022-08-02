import { Routes, Route, Link } from "react-router-dom";
// import Home from '../layouts/Home';
import Login from "../auth/login";
import Register from "../auth/register";

function Guest() {
  return (
      <>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      {/* <Link className="nav-link" to="/">Home</Link> */}
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/">Register</Link>
                  </li>
              </ul>
          </nav>
          <div className="container">
              <Routes>
                  {/* <Route path="/" element={<Home />} /> */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Register />} />
              </Routes>
          </div>
      </>
  );
  
    // <div>
    //   <nav ">
    //     <div className="container">
    //         <img
    //           src="https://pic.onlinewebfonts.com/svg/img_571837.png"
    //           height="50"
    //           alt="logo"
    //         />
    //       <div className="collapse navbar-collapse" id="navbarButtonsExample">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
    //         <div className="d-flex align-items-center">
    //           <Link className="btn px-3 me-2" to="/login">
    //             Login
    //           </Link>
    //           <Link
    //             type="button"
    //             className="btn btn-primary me-3"
    //             to="/register"
    //           >
    //             Sign up for free
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    //   <div className="container">
    //     <Routes>

    //       <Route path="/register" element={<Register />} />
    //       <Route path="/login" element={<Login />} />
    //     </Routes>
    //   </div>
    // </div>
 
}

export default Guest;
