import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import AdminPage from "./AdminPage"
import Register from "../components/Register"
import ReactDOM from "react-dom";


//// TODO FIXA SÅ BARA ETT GENERELLT MEDDELANDE KASTAS TILLBAKA NÄR LOGIN INTE FUNKAR; ISTÄLLET FÖR ATT SPECIFICERA PROBLEMET FÖR NÅGON SOM VILL KOMMA IN


const Admin = () => {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(true);

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

    const handleSubmit = (event) => {
        event.preventDefault();

        const { uname, pass } = document.forms[0];

        // hittar login info
        const userData = database.find((user) => user.username === uname.value);

        // Jämnför användare
        if (userData) {
            if (userData.password !== pass.value) {
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

    const handleSwitchMode = () => {
        setIsLoginMode(!isLoginMode);
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

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

    // toggle för om login eller register visas
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
