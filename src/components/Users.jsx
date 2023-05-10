import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
// import { userState } from "../atoms/userState";
// import { passwordState } from "../atoms/passwordState";
import { url } from "../data/constants";

const Users = () => {
    const [user, setUser] = useRecoilState(userState);
    const [password, setPassword] = useRecoilState(passwordState);
    const [shopId, setShopId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("adding user to registry");
        fetch(url + '/?action=add-user', {
            method: "POST",
            body: JSON.stringify({ user, password, shopId }),
        })
            .then((response) => {
                console.log("user Succefully added" + user + ',' +  password + ',' + shopId);
            })
            .catch((error) => {
                console.log("unable to add user to registry");
            });
    };

    return (
        <section>
            <div className="wrapper">
                <p>Lägg till ny användare</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="user">Användarnamn</label>
                    <input
                        type="text"
                        id="user"
                        value={user}
                        onChange={(event) => setUser(event.target.value)}
                    />
                    <label htmlFor="password">Lösenord</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <label htmlFor="shopId">Shop-ID</label>
                    <input
                        type="text"
                        id="shopId"
                        value={shopId}
                        onChange={(event) => setShopId(event.target.value)}
                    />
                    <button type="submit">Registrera</button>
                </form>
            </div>
            <Link to="/Admin">Back</Link>
        </section>
    );
};

export default Users;
