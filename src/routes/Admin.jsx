import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "admin",
            password: "password"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const unameRef = useRef(null);
    const passRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const uname = unameRef.current.value;
        const pass = passRef.current.value;

        // hittar login info
        const userData = database.find((user) => user.username === uname);

        // Jämnför användare
        if (userData) {
            if (userData.password !== pass) {
                // Fel Lösen
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // User finns ej
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const loginForm = (
        <div className="form-wrapper">
            <form>
                <label>Username </label>
                <input type="text" name="uname" ref={unameRef} required />
                {renderErrorMessage("uname")}
                <label>Password </label>
                <input type="password" name="pass" ref={passRef} required />
                {renderErrorMessage("pass")}
                <div>
                    <button onClick={handleSubmit}>Logga In</button>
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title"></div>
                {isSubmitted ? (
                    <div>
                        <Link to="/Products">Edit Products</Link>
                        <Link to="/Users">Edit Users</Link>
                    </div>
                ) : (
                    loginForm
                )}
            </div>
        </div>
    );
};

export default Admin;
