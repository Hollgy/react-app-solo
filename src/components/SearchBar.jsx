import { useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { SlMagnifier } from "react-icons/sl"
import { productState } from "../atoms/productAtom"
import { cartState } from "../atoms/cartState"
import { Link } from "react-router-dom"
import { isLoggedInState } from "../atoms/isLoggedIn"
const SearchBar = () => {
    const [product, setProduct] = useRecoilState(productState)
    const [searchInput, setSearchInput] = useState("")
    const [cart, setCart] = useRecoilState(cartState)
    const isLoggedIn = useRecoilValue(isLoggedInState);

    const handleInput = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value.toLowerCase())
    }
    const filteredProducts = product.filter((product) => {
        return product.name.toLowerCase().match(searchInput)
    })

    const handleAdditionToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleRemovalOfProduct = (product) => {
        setProduct((prevProducts) => prevProducts.filter((p) => p.id !== product.id));
    };


    return (
        <>
            <section>
                <div>
                    <div className="line">
                        <h1>Produkter</h1>
                    </div>
                    <SlMagnifier />
                    <input className="searchbar" type="search" placeholder="Search for a product" onChange={handleInput} value={searchInput} />
                    <ul>
                        {filteredProducts.length === 0 ? (
                            <p>Sorry, We dont have any products that match your search, try again...</p>
                        ) : (
                            filteredProducts.map((product) => {
                                return (
                                    <li className="product-card" key={product.id} >
                                        <Link to={`/product/${product.id}`}>
                                            <p>{product.name}</p>
                                            <p>{product.price}</p>
                                            <p>{product.description}</p>
                                        </Link>
                                        <img className="product-image" src={product.picture} />
                                        <button onClick={() => handleAdditionToCart(product)}>Add to cart</button>
                                        {isLoggedIn && (
                                            <button onClick={() => handleRemovalOfProduct(product)}>Remove Product</button>
                                        )}
                                    </li>
                                )
                            })
                        )}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default SearchBar
