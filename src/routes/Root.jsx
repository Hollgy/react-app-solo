import { Outlet, Link, NavLink, useNavigate, } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../atoms/isLoggedIn";
import HamburgerMenu from "../components/hamburgerMenu";
import { useMediaQuery } from "react-responsive";
import { productState } from "../atoms/productAtom";
import { useEffect } from "react";
import { url, shopId } from "../data/constants";

const Root = () => {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
    const [products, setProducts] = useRecoilState(productState);
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: 500 });

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/");
    };


    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(url + '?action=get-products&shopid=' + shopId);
                const data = await response.json();
                setProducts([...data]); // Skapa en kopia av produkterna

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
    }, [onload]);

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
                            <BsCart2 className="carticon" />
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
