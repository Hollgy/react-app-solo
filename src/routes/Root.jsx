import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import myImage from "/public/shopping-cart.png";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../atoms/isLoggedIn";

const Root = () => {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/"> Start </NavLink>
                    <NavLink to="/Products"> Produkter </NavLink>
                    {isLoggedIn ? (
                        <button onClick={handleLogout}>Logga ut</button>
                    ) : (
                        <NavLink to="/Admin">Logga in</NavLink>
                    )}
                    <aside>
                        <NavLink to="/Cart">
                            <img src="/public/shopping-cart.png" alt="My Image" className="cart-image" />
                        </NavLink>
                    </aside>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Root;
