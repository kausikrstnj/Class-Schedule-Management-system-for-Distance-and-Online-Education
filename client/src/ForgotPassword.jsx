import React, { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';


function ForgotPassword() {
    const navigate = useNavigate();
    const location = useLocation();
    const form = useRef();
    const [userId, setUserId] = useState('');


    //To generate random 4 digit number.
    function generateRandomNumber() {
        return Math.floor(1000 + Math.random() * 9000);
    }

    //To send email.
    const sendEmail = async () => {
        event.preventDefault();
        let templateParams = {
            randomNumber: generateRandomNumber(),
            mailId: document.getElementById('email').value,
        };
        try {
            const response = await fetch(`https://zenclass-ticketing-system-for-query.onrender.com/api/resetToken`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(templateParams)
            })
            const data = await response.json();
            emailjs.send('service_44f2qb4', 'template_gihdrwi', templateParams, {
                publicKey: 'USN66qmbEOQ3Y9Yjl',
            }).then(
                (response) => {
                    console.log('Forgot pss/userId-- ', data.userId);
                    navigate(`/otp/${data.userId}`);
                    console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
        } catch (error) {
            console.error('Error fetching queries:', error);
        }
    };

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (<div className='loginContainer'>
        <form className="modern-form">
            <div className="form-title">Forgot Password</div>

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
            </div>

            <button className="submit-button" type="submit" onClick={clickSubmit}>
                <span className="button-text">Send Email</span>
                <div className="button-glow"></div>
            </button>


        </form>

    </div>
    )
}

export default ForgotPassword