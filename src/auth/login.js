import { useState } from "react"
import AuthUser from './AuthUser';

export default function Login() {
    const {http,setToken} = AuthUser();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/login',{email:email,password:password}).then((res)=>{
            setToken(res.data.user,res.data.access_token);
        })
    }

    return(
        <div className="row justify-content-center pt-5 pb-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Login </h1>
                    <div className="form-group">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button>
                </div>
            </div>
        </div>
    )
}



// import { useState } from 'react';
// import './login.css';
// import AuthUser from './AuthUser';

// export default function Login() {
//     const {http} = AuthUser();
//     const[email,setEmail] = useState();
//     const[password,setPassword] = useState();

//     const submitForm = () =>{
//         //api call
//         http.post('/login',{email:email,password:password}).then((res)=>{
//             console.log(res.data);
//             // setToken(res.data.user,res.data.access_token);
//         })
//     }

//     return (
//         <div className='row justify-content-center pt-5'>
//             <div className='col-sm-6'>
//                 <div className='card p-4'>
//                 <div className="form-group">
//                     <label>Email address:</label>
//                     <input type="email" className="form-control" placeholder="Enter email" 
//                     onChange={ e=>setEmail(e.target.value)}
//                     id="email" />
//                 </div>
//                 <div className="form-group mt-3">
//                     <label>Password:</label>
//                     <input type="password" className="form-control" placeholder="Enter password"
//                     onChange={e=>setPassword(e.target.value)} 
//                     id="pwd" />
//                 </div>
//                 <div className="form-group form-check">
//                     <label className="form-check-label">
//                     <input className="form-check-input" type="checkbox" htmlFor="customCheck1"/> Remember me
//                     </label>
//                 </div>
//                 <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button>
//                                 </div>
//             </div>
//         </div>
//     )
// }

    
    
//     //             type="email"
//     //             className="form-control"
//     //             placeholder="Enter email"
//     //             onChange={(e) => setEmail(e.target.value)}
//     //         />
//     //         </div>
//     //         <div className="mb-3">
//     //         <label>Password</label>
//     //         <input
//     //             type="password"
//     //             className="form-control"
//     //             placeholder="Enter password"
//     //             onChange={(e) => setPassword(e.target.value)}
//     //         />
//     //         </div>
//     //         <div className="mb-3">
//     //         <div className="custom-control custom-checkbox">
//     //             <input
//     //             type="checkbox"
//     //             className="custom-control-input"
//     //             id="customCheck1"
//     //             />
//     //             <label className="custom-control-label" htmlFor="customCheck1">
//     //             Remember me
//     //             </label>
//     //         </div>
//     //         </div>
//     //         <div className="d-grid">
//     //         <button type="button" onClick={submitForm} className="btn btn-primary">
//     //             Login
//     //         </button>
//     //         </div>
//     //         <p className="forgot-password text-right">
//     //         {/* Forgot <a href="#">password?</a> */}
//     //         </p>
//     //   </form>
//     //   </div>



