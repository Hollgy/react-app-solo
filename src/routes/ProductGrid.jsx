import { url, shopId } from "../data/constants"
import productList from "../data/data"
import { useRecoilState } from "recoil"
import { productState } from "../data/productAtom"
import { useState, useEffect } from "react"
import SearchBar from "../components/SearchBar"



const ShowProducts = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch(url + '?action=get-products&shopid=' + shopId);
                const data = await response.json();
                const filteredData = data.filter(product => product.name.includes(searchInput))
                setProduct(filteredData);
            } catch (error) {
                console.error('failed to get items', error);
            }
        }
        getProducts();
    }, []);



    
    return (
        <section>
            <div className="product wrapper">
                <>
            <SearchBar />
                </>
                <ul className="">
                    {product.map((product) => (
                        <li key={product.id} >
                            <h4>Produkter</h4>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <img className="product-image" src={product.picture} />
                        </li>
                    ))}
                </ul>
            </div>
        </section >
    )

    
}
export default ShowProducts
