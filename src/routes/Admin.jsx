import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../atoms/isLoggedIn";

const Admin = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

    // User Login info
    const database = [
        {
            username: "admin",
            password: "password",
        },
    ];

    const errors = {
        uname: "Wrong Credentials ",
        pass: "Wrong Credentials",
    };

    const unameRef = useRef(null);
    const passRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const uname = unameRef.current.value;
        const pass = passRef.current.value;

        // Find user login info
        const userData = database.find((user) => user.username === uname);

        // Compare user
        if (userData) {
            if (userData.password !== pass) {
                // Incorrect password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsLoggedIn(true);
            }
        } else {
            // User not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Add code to clear any user data from session/local storage here
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const loginForm = (
        <div className="wrapper">
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

    const loggedInLinks = (
        <div className="wrapper">
            <Link to="/AddProducts">Add Products</Link>
            <Link to="/Users">Add Users</Link>
            <div>
            <button onClick={handleLogout}>Logga Ut</button>
            </div>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title"></div>
                {isLoggedIn ? loggedInLinks : loginForm}
            </div>
        </div>
    );
};

export default Admin;
