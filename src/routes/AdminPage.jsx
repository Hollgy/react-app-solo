import AdminProducts from "../components/AdminProducts"
import AdminUsers from "../components/AdminUsers"
import Register from "../components/Register"

const AdminPage = () => (
    <section>
        <div className="wrapper">
            <AdminProducts />
            <AdminUsers />
            <Register />
        </div>
    </section>
)

export default AdminPage