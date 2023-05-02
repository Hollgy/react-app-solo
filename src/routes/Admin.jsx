import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import AdminPage from "./AdminPage"
import Register from "../components/Register"



const Admin = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = () => {
        e.preventDefault()
        console.log(email);
    }

    return (
        <section>
            <div>
                <form onSubmit={handleSubmit} >
                    <div className="form-wrapper">
                        <label htmlFor="email"> Email</label>
                        <input type="email" placeholder="Email" id="email" name="email" />
                        <label htmlFor="password"> Password</label>
                        <input type="text" placeholder="******" id="password" name="password" />
                        <button type="submit">Log In</button>
                    </div>
                </form>
                <div className="text-wrapper">
                    <h4>Dont have an account yet?</h4>
                    <Link to={'/AdminPage'}>Register Here</Link>
                </div>
            </div>
        </section >
    )
}

export default Admin