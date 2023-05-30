import { useSetRecoilState } from "recoil";
import { NavLink, Link } from "react-router-dom";
import { productState } from "../atoms/productAtom";
import { useState } from "react";
import { url, shopId } from "../data/constants"

const AddProducts = () => {
    const setProductState = useSetRecoilState(productState);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState("");
    const [error, setError] = useState(""); // State to track validation error
    const [success, SetSuccess] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation checks
        if (name.trim() === "" || price.trim() === "" || description.trim() === "" || picture.trim() === "") {
            setError("Please fill in all fields.");
            return;
        }

        if (name.length < 0 || name.length > 20) {
            setError("Product Name is too long.");
            return;
        }



        const newProduct =

        {
            name: name,
            description: description,
            price: price,
            picture: picture,
            id: Math.floor(Math.random() * 10000)
        }



        setProductState((prevProducts) => [...prevProducts, newProduct]);
        setName("");
        setDescription("");
        setPrice("");
        setPicture("");
        setError("");
        SetSuccess("Din produkt har adderats!")
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handlePrice = (e) => {
        setPrice(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handlePicture = (e) => {
        setPicture(e.target.value);
    };





    return (
        <section>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Namn på Produkt</label>
                    <input type="text" value={name} onChange={handleName} />
                    <label htmlFor="">Beskrivning av produkt</label>
                    <textarea value={description} onChange={handleDescription} />
                    <label htmlFor="">Produktens Pris</label>
                    <input type="number" value={price} onChange={handlePrice} />
                    <label htmlFor="">URL för bild</label>
                    <input type="text" value={picture} onChange={handlePicture} />
                    {error && <p className="error">{error}</p>} {/* Display error message if there is validation issues */}
                    {success && <p className="success">{success}</p>} {/* Display success message */}
                    <button type="submit">Lägg till</button>
                </form>
            </div>
            <Link to="/Admin">Bakåt</Link>
        </section>
    );
};

export default AddProducts;
