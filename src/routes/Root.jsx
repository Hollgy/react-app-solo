import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import myImage from "/public/shopping-cart.png";
import { BsCart2 } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../atoms/isLoggedIn";
import HamburgerMenu from "../components/hamburgerMenu";
import { useMediaQuery } from "react-responsive";

const Root = () => {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: 500 });

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <div>
            <header>
                <nav>
                    {isMobile && <HamburgerMenu />}
                    <NavLink to="/" className={isMobile ? "invisible" : ""}>
                        Start
                    </NavLink>
                    <NavLink to="/Products" className={isMobile ? "invisible" : ""}>
                        Produkter
                    </NavLink>
                        <NavLink to="/Admin" className={isMobile ? "invisible" : ""}>
                            Användare
                        </NavLink>
                    <aside>
                        <Link to="/Cart">
                            <BsCart2 className="carticon"/>
                        </Link>
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
