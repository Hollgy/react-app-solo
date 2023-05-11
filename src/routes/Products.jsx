import { url, shopId } from "../data/constants"
// import productList from "../data/data"
import { useRecoilState } from "recoil"
import { productState } from "../atoms/productAtom"
import { useState, useEffect } from "react"
import SearchBar from "../components/SearchBar"



const ShowProducts = () => {
    const [product, setProduct] = useRecoilState(productState)
    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch(url + '?action=get-products&shopid=' + shopId);
                const data = await response.json();
                const filteredData = data.filter(product => product.name.includes())
                setProduct(data);
            } catch (error) {
                console.error('failed to get items', error);
            }
        }
        getProducts();
    }, []);



    
    return (
        <section>
            <div className="product wrapper">
            <SearchBar />
            </div>
        </section >
    )

    
}
export default ShowProducts
