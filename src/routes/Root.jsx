import { Outlet, Link, NavLink } from "react-router-dom"

const Root = () => (
    <div>
        <header>
            <nav>
                <NavLink to="/"> Start </NavLink>
                <NavLink to="/Products"> Products </NavLink>
                <NavLink to="/Admin" >Admin</NavLink>
                <NavLink to="/Cart">Cart</NavLink>
                {/* <Navlink to="/AdminPage"></Navlink> */}
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
)

export default Root