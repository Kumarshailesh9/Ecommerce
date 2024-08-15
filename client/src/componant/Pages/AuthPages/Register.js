import React, { useState } from 'react'
import Layout from '../../layout/Layout.js'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../../../style/Authstyle.css';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/register', { name, email, password , phone, address });
            if (res.status === 201) {
                toast.success('Registration Successful');
                navigate('/Login');
                
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
              <h2 className='title'>Register Page</h2>
                <div className="mb-3">

                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        id="exampleInputName"
                        placeholder='Enter Name'

                    />
                </div>

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

                <div className="mb-3">
                    <input type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder='Enter Phone No.'
                    />
                </div>
                <div className="mb-3">
                    <input type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder='Enter address'
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </Layout>
    );
}

export default Register



