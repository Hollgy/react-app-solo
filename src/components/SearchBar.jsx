import { useState } from "react"
import { useRecoilState } from "recoil"
import { SlMagnifier } from "react-icons/sl"
import { productState } from "../atoms/productAtom"
import { cartState } from "../atoms/cartState"
import { v4 as uuidv4 } from "uuid"



// todo addera kommentarer till allt för att navigera enklare
const SearchBar = ({ }) => {
    const [product, setProduct] = useRecoilState(productState)
    const [searchInput, setSearchInput] = useState("")
    const [cart, setCart] = useRecoilState(cartState)

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value.toLowerCase())
    }
    const filteredProducts = product.filter((product) => {
        return product.name.toLowerCase().match(searchInput)
    })

    const handleAdditionToCart = (product) => {
        const newProduct = { ...product, id: uuidv4() };
        setCart([...cart, newProduct]);
    };



    return (
        <>
            <section>
                <div>
                    <SlMagnifier />
                    <input type="search" placeholder="Search for a product" onChange={handleChange} value={searchInput} />
                    <ul>
                        {filteredProducts.length === 0 ? (
                            <p>Sorry, We dont have any products that match your search, try again...</p>
                        ) : (
                            filteredProducts.map((product, id) => {
                                return (
                                    <li key={id} >
                                        <h4>Produkter</h4>
                                        <p>{product.name}</p>
                                        <p>{product.price}</p>
                                        <p>{product.description}</p>
                                        <img className="product-image" src={product.picture} />
                                        <button onClick={() => handleAdditionToCart(product
                                        )}>Add to cart</button>
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


