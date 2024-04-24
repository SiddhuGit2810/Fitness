// Login

import React, { useRef, useState } from 'react';
import './Login.css';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import bcrypt from 'bcryptjs-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Form() {

    const [pass, setPass] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [email, setemail] = useState('')
    const [error, seterror] = useState('')
    const [logincomplete, setlogincomplete] = useState('')

    const handleToggle = () => {
        setType(type === 'password' ? 'text' : 'password');
        setIcon(type === 'password' ? eye : eyeOff);
    };

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    // const signup = async (e) => {
    //     e.preventDefault();
    //     const signemail = emailRef.current.value;
    //     const signpassword = passwordRef.current.value;

    //     // const hashedpassword = bcrypt.hashSync(signpassword, 10);

    //     try {
    //         const response = await axios.post("https://fitness-60022916701.development.catalystserverless.in/server/Duplicate_of_Data/postlogin", {
    //             email: signemail,
    //             password: signpassword
    //         });
    //         console.log(JSON.stringify(response));
    //         setPass('')
    //         setemail('')
    //     } catch (error) {
    //         console.error("Signup error:", error);
    //     }
    // };


    const loginIn = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        // console.log("email " + email)
        // console.log("password " + password)

        // const loginhashedpassword = bcrypt.hashSync(password, 10);
        // console.log(loginhashedpassword)

        try {
            const response = await axios.post("https://fitness-60022916701.development.catalystserverless.in/server/login/userlogin", {
                Email: email,
                Password: password
            });
            console.log(response)
            setlogincomplete(response.data);

            setPass('')
            setemail('')
            setTimeout(() => {
                navigate('/HomePage')
            }, 1000)

        } catch (error) {
            console.error("Login error:", error);
            seterror(error.response.data);

            // if (error.response) {

            // } else {
            //     seterror("An error occurred during login");
            // }
        }

    };

    const navigate = useNavigate()

    const handleclick = () => {
        navigate('/Login')
    }

    return (
        <div>
            <div className="login-container">
                <p className="title">Login</p>
                <form className="form">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="" ref={emailRef} autoComplete='current-email' value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <span className="flex justify-around items-center" onClick={handleToggle}>
                            <Icon className="absolute mr-10" icon={icon} size={20} />
                        </span>
                        <input type={type} name="password" id="password" placeholder="" value={pass} onChange={(e) => setPass(e.target.value)} autoComplete="current-password" ref={passwordRef} />
                        <div className="forgot">
                            <a href="#">Forgot Password ?</a>
                        </div>
                    </div>
                    <button className="sign" onClick={(e) => loginIn(e)}><h6>Log in</h6></button>
                </form>
                <p className="signup">Don't have an account?
                    <a href="#" className="" onClick={handleclick}> Sign up</a>
                </p>
                {logincomplete && <p className='loginsucess'>{logincomplete.message}</p>}
                {error && <p className="error">{error.message}</p>}

            </div>
        </div>
    );
}

export default Form;
