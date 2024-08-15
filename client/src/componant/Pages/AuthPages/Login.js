import React, { useState } from 'react'
import Layout from '../../layout/Layout.js'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../../../style/Authstyle.css';
import { useAuth } from '../../../context/auth.js';
import { useLocation } from 'react-router-dom';


const Login = () => {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();
   
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/login', {
                 email, 
                 password 
                });
            if (res.status === 201) {
                toast.success('Login Successful');
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate(location.state || '/');
                
            } else {
                toast.error('Something went wrong');
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout>
            <div className='form-container'>
              <form onSubmit={handleSubmit}>
              <h2 className='title'>Login Page</h2>

                <div className="mb-3">
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder='Enter Email'
                    />
                </div>

                <div className="mb-3">
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder='Enter password'
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </div>
        </Layout>
    );
}

export default Login



