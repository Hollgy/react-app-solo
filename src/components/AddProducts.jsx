import { useSetRecoilState } from "recoil";
import { NavLink, Link } from "react-router-dom";
import { productState } from "../atoms/productAtom";
import { newProductState } from "../atoms/newProduct";
import { useEffect } from "react";
import { useState } from "react";
import { url, shopId } from "../data/constants"

const AddProducts = () => {
    const setProductState = useSetRecoilState(productState);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            name: name,
            description: description,
            price: price,
            picture: picture,
            shopid: shopId
        };
        
        postNewProduct(newProduct);
        setProductState((prevProducts) => [...prevProducts, newProduct]);
        setName("");
        setDescription("");
        setPrice("");
        setPicture("");
        // setShowForm(false);
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

    const postNewProduct = async (newProduct) => {
        try {
            const response = await fetch(`${url}?action=add-product`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });
            const data = await response.json();
            console.log("Data returned:", data);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <section>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Namn på Produkt</label>
                    <input type="text" value={name} onChange={handleName} />
                    <label htmlFor="">Beskrivning av produkt</label>
                    <input type="text" value={description} onChange={handleDescription} />
                    <label htmlFor="">Produktens Pris</label>
                    <input type="text" value={price} onChange={handlePrice} />
                    <label htmlFor="">URL för bild</label>
                    <input type="text" value={picture} onChange={handlePicture} />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Link to="/Admin">Back</Link>
        </section>
    );
};

export default AddProducts;
