import { useState } from "react"
import { useRecoilState } from "recoil"
import { SlMagnifier } from "react-icons/sl"
import { productState } from "../atoms/productAtom"
import { cartState } from "../atoms/cartState"
import { Link } from "react-router-dom"

const SearchBar = () => {
    const [product, setProduct] = useRecoilState(productState)
    const [searchInput, setSearchInput] = useState("")
    const [cart, setCart] = useRecoilState(cartState)

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

    return (
        <>
            <section>
                <div>
                    <h2>Produkter</h2>
                    <SlMagnifier />
                    <input type="search" placeholder="Search for a product" onChange={handleInput} value={searchInput} />
                    <ul>
                        {filteredProducts.length === 0 ? (
                            <p>Sorry, We dont have any products that match your search, try again...</p>
                        ) : (
                            filteredProducts.map((product) => {
                                return (
                                    <li key={product.id} >
                                        <Link to={`/product/${product.id}`}>
                                            <p>{product.name}</p>
                                            <p>{product.price}</p>
                                            <p>{product.description}</p>
                                        </Link>
                                        <img className="product-image" src={product.picture} />
                                        <button onClick={() => handleAdditionToCart(product)}>Add to cart</button>
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
