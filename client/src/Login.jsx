import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './SignUp.css'

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: ''
    });

    const clickSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email: values.email || undefined,
            password: values.password || undefined,
        };

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();
            //console.log("🎉 Login response:", data);

            if (data.msg === 'Email or password is incorrect.') {
                setValues({ ...values, error: data.msg });
            } else {
                localStorage.setItem('jwt', JSON.stringify(data));
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('role', data.role);
                localStorage.setItem('userName', data.userName);
                navigate('/home');
            }
        } catch (error) {
            console.error("❌ Login error:", error);
            alert("Login failed. Please try again later.");
        }
    };
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };


    return (
        <div className='loginContainer'>
            <form className="modern-form">
                <div className="form-title">Login</div>

                <div className="form-body">

                    <div className="input-group">
                        <div className="input-wrapper">
                            <svg fill="none" viewBox="0 0 24 24" className="input-icon">
                                <path
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                                ></path>
                            </svg>
                            <input
                                required=""
                                placeholder="Email"
                                className="form-input"
                                type="email"
                                onChange={handleChange('email')}
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-wrapper">
                            <svg fill="none" viewBox="0 0 24 24" className="input-icon">
                                <path
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    d="M12 10V14M8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8C6 6.89543 6.89543 6 8 6Z"
                                ></path>
                            </svg>
                            <input
                                required=""
                                placeholder="Password"
                                className="form-input"
                                type="password"
                                onChange={handleChange('password')}
                            />
                            <button className="password-toggle" type="button">
                                <svg fill="none" viewBox="0 0 24 24" className="eye-icon">
                                    <path
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                                    ></path>
                                    <circle
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        r="3"
                                        cy="12"
                                        cx="12"
                                    ></circle>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* <div className="form-floating mb-1">
                        <Link className="forgot-password-link link" to={`/forgotPassword`} >Forgot Password</Link>
                    </div> */}
                </div>
                {values.error && (
                    <span style={{ color: 'red', fontSize: '12px' }} className="error-message">
                        {values.error}
                    </span>
                )}
                <button className="submit-button" type="submit" onClick={clickSubmit}>
                    <span className="button-text">Login</span>
                    <div className="button-glow"></div>
                </button>


            </form>

        </div>
    )
}

export default Login