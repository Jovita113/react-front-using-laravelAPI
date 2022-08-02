import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

export default function Register() {
    const navigate = useNavigate();
    const {http} = AuthUser();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/register',{email:email,password:password,name:name}).then((res)=>{
            // setToken(res.data.user,res.data.access_token);
            navigate('/login');
        })
    }

    return(
        <div className="row justify-content-center pt-5 pb-5">
            <div className="col-sm-6">
                <div className="card p-4 mb-3 mt-3">
                    <h1 className="text-center mb-3">Register </h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="test" className="form-control" placeholder="Enter name"
                            onChange={e=>setName(e.target.value)}
                        id="email" />
                    </div>
                    <div className="form-group mt-3">
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
                    <div class="form-check mb-3 mt-3">
                        <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                        </label>
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Register</button>
                </div>
            </div>
        </div>
    )
}