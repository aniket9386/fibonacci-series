import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let history = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            history("/");
        }
        // eslint-disable-next-line
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_BACKHOST}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // save the authtoken and redirect
            localStorage.setItem('token', json.authtoken);
            history("/");
            props.showAlert("Logged In Sucessfully", "success");
        } else {
            props.showAlert("Invalid Credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <h3 className='my-3'>Login to view the content</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" placeholder="Enter Email" id="email" name="email" value={credentials.email} onChange={onChange} required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" placeholder="Enter Password" id="password" name="password" value={credentials.password} onChange={onChange} required />
                    <label htmlFor="password">Password</label>
                </div>

                <button type="submit" className="btn btn-primary px-5" >Login</button>
            </form>
            <p className='mt-3'>Don't have account? <Link to="/signup" className='fw-semibold'>Sign Up</Link></p>
            <div className='pt-3'>
                <h5>Dummy Creds For Login Or You can Signup</h5>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>testname@gmail.com</td>
                            <td>12345</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Login