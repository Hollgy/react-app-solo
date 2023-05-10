import { Outlet, Link, NavLink } from "react-router-dom"
import myImage from "/public/shopping-cart.png"

const Root = () => (
    <div>
        <header>
            <nav>
                <NavLink to="/"> Start </NavLink>
                <NavLink to="/Productgrid"> Produkter </NavLink>
                <NavLink to="/Admin" >Logga in</NavLink>
                <aside>
                    <NavLink to="/Cart"><img src="/public/shopping-cart.png" alt="My Image" className="cart-image" /></NavLink>
                </aside>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
)

export default Root