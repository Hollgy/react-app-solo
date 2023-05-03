import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import AdminPage from "./AdminPage"
import Register from "../components/Register"
import ReactDOM from "react-dom";

const Admin = () => {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(true);

    // User Login info
    const database = [
        {
            username: "user",
            password: "admin"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const handleSwitchMode = () => {
        setIsLoginMode(!isLoginMode);
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderLoginForm = (
        <div className="form-wrapper">
            <form >
                {/* <div> */}
                <label>Username </label>
                <input type="text" name="uname" required />
                {renderErrorMessage("uname")}
                {/* </div>
                <div> */}
                <label>Password </label>
                <input type="password" name="pass" required />
                {renderErrorMessage("pass")}
                {/* </div> */}
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            <div className="button-wrapper">
                <h3>Don't have an account? <button onClick={handleSwitchMode}>Register Here</button></h3>
            </div>
        </div>
    );

    // JSX code for registration form
    const renderRegistrationForm = (
        <div className="form-wrapper">
            <Register />
            <div className="button-wrapper">
                <h3>Already have an account? <button onClick={handleSwitchMode}>Sign In</button></h3>
            </div>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">{isLoginMode ? "Sign In" : "Register"}</div>
                {isSubmitted ? <div>User is successfully logged in</div> :
                    (isLoginMode ? renderLoginForm : renderRegistrationForm)}
            </div>
        </div>
    );
}

export default Admin
