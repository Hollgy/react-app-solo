import { url, shopId } from "../data/constants"
import productList from "../data/data"
import { useRecoilState } from "recoil"
import { productState } from "../data/productAtom"
import { useState, useEffect } from "react"


const ShowProducts = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch(url + '?action=get-products&shopid=' + shopId);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('failed to get items', error);
            }
        }

        getProducts();
    }, []);

    return (
        <section>
            <div className="start wrapper">
                <ul>
                    {product.map((product) => (
                        <li key={product.id} >
                            <h4>Produkter</h4>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section >
    )
}
export default ShowProducts