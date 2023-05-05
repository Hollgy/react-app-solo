import { Outlet, Link, NavLink } from "react-router-dom"
import myImage from "/public/shopping-cart.png"

const Root = () => (
    <div>
        <header>
            <nav>
                <NavLink to="/"> Start </NavLink>
                <NavLink to="/Productgrid"> Product Grid </NavLink>
                <NavLink to="/Admin" >Admin</NavLink>
                <aside>
                    <NavLink to="/Cart"><img src="/public/shopping-cart.png" alt="My Image" className="cart-image" /></NavLink>
                </aside>
                {/* <Navlink to="/AdminPage"></Navlink> */}
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
)

export default Root