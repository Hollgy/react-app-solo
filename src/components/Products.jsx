import { NavLink,Link } from "react-router-dom"
import Admin from "../routes/Admin"

const Products = () => {
    return (
        <section>
            <div className="form-wrapper">
                <h2>This is Products</h2>
                <form action="">
                    <label htmlFor="">Namn på Produkt</label>
                    <input type="text" />
                    <label htmlFor="">Beskrivning av produkt</label>
                    <input type="text" />
                    <label htmlFor="">Produktens Pris</label>
                    <input type="text" />
                    <label htmlFor="">URL för bild</label>
                    <input type="text" />
                </form>
            </div>
            <Link to="/Admin">Back</Link>
        </section>
    )
}


export default Products