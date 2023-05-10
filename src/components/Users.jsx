import { useState } from "react"
import { Link } from "react-router-dom"


const Users = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    return (
        <section>
            <div className="wrapper">
                <p>This is Users</p>
                <form action="">
                    <label htmlFor="">user</label>
                    <input type="text" />
                    <label htmlFor="">password</label>
                    <input type="text" />
                    <label htmlFor="">shopid</label>
                    <input type="text" />
                </form>
            </div>
            <Link to="/Admin">Back</Link>
        </section>
    )
}

export default Users


