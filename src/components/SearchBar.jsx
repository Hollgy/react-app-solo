import { useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { productState } from "../atoms/productAtom"
import { cartState } from "../atoms/cartState"
import { Link } from "react-router-dom"
import { isLoggedInState } from "../atoms/isLoggedIn"
import productList from "../data/data"

const SearchBar = () => {
    const [products, setProducts] = useRecoilState(productState)
    const [searchInput, setSearchInput] = useState("")
    const [cart, setCart] = useRecoilState(cartState)
    const isLoggedIn = useRecoilValue(isLoggedInState)

    const handleInput = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value.toLowerCase())
    }

    const filteredProducts = products.filter((product) => {
        const productNameLower = product.name.toLowerCase()
        return productNameLower.includes(searchInput)
    })

    const handleAdditionToCart = (product) => {
        setCart([...cart, product])
    }

    const handleRemovalOfProduct = (product) => {
        const updatedProducts = products.filter((p) => p.id !== product.id)
        setProducts(updatedProducts)
        return(
            <p>Adderad till varukorgen</p>
        )
    }

    

    return (
        <>
            <section >
                <div >
                    <div className="product-header">
                        <h1>Produkter</h1>
                    <input className="searchbar" type="search" placeholder="Search for a product" onChange={handleInput} value={searchInput} />
                    </div>
                    <ul className="product-card-wrapper">
                        {searchInput && filteredProducts.length === 0 ? (
                            <p>Sorry, We don't have any products that match your search, try again...</p>
                        ) : (
                            <>
                                {searchInput ? (
                                    filteredProducts.map((product) => (
                                        <li className="product-card" key={product.id} >
                                            <Link to={`/product/${product.id}`}>
                                                <p>{product.name}</p>
                                                <p>{product.price}kr</p>
                                                {/* <p>{product.description}</p> */}
                                            </Link>
                                            <img className="product-image" src={product.picture} />
                                            <button onClick={() => handleAdditionToCart(product)}>Add to cart</button>
                                            {isLoggedIn && (
                                                <button onClick={() => handleRemovalOfProduct(product)}>Remove Product</button>
                                            )}
                                        </li>
                                    ))
                                ) : (
                                    products.map((product) => (
                                        <li className="product-card" key={product.id} >
                                            <Link to={`/product/${product.id}`}>
                                                <p>{product.name}</p>
                                                <p>{product.price}kr</p>
                                                {/* <p>{product.description}</p> */}
                                            </Link>
                                            <img className="product-image" src={product.picture} />
                                            <button onClick={() => handleAdditionToCart(product)}>Add to cart</button>
                                            {isLoggedIn && (
                                                <button onClick={() => handleRemovalOfProduct(product)}>Remove Product</button>
                                            )}
                                        </li>
                                    ))
                                )}
                            </>
                        )}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default SearchBar
