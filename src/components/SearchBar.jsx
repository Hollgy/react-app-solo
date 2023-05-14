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
    const [cartMessage, setCartMessage] = useState("");


    const handleInput = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value.toLowerCase())
    }

    const filteredProducts = products.filter((product) => {
        const productNameLower = product.name.toLowerCase()
        return productNameLower.includes(searchInput)
    })

    const handleAdditionToCart = (product) => {
        setCart([...cart, product]);
        setCartMessage("Din vara har lagts till i varukorgen");


        setTimeout(() => {
            setCartMessage("");
        }, 500);
    }


    const handleRemovalOfProduct = (product) => {
        const updatedProducts = products.filter((p) => p.id !== product.id)
        setProducts(updatedProducts)
    }



    return (
        <>
            <section >
                <div >
                    <div className="product-header">
                        <h1>Produkter</h1>
                    <p>{cartMessage}</p>
                        <input className="searchbar" type="search" placeholder="Search for a product" onChange={handleInput} value={searchInput} />
                    </div>
                    <ul className="product-card-wrapper">
                        {searchInput && filteredProducts.length === 0 ? (
                            <p>Vi ber om ursäkt, Vi har ingen produkt som matchar din sökning, försök igen...</p>
                        ) : (
                            <>
                                {searchInput ? (
                                    filteredProducts.map((product) => (
                                        <li className="product-card" key={product.id} >
                                            <Link to={`/product/${product.id}`}>
                                                <p>{product.name}</p>
                                                <img className="product-image" src={product.picture} />
                                            </Link>
                                            <p>{product.price}kr</p>
                                            <button onClick={() => handleAdditionToCart(product)}>Lägg till i kundvagnen</button>
                                            {isLoggedIn && (
                                                <button onClick={() => handleRemovalOfProduct(product)}>Ta bort produkt</button>
                                            )}
                                        </li>
                                    ))
                                ) : (
                                    products.map((product) => (
                                        <li className="product-card" key={product.id} >
                                            <Link to={`/product/${product.id}`}>
                                                <p>{product.name}</p>
                                                <img className="product-image" src={product.picture} />
                                            </Link>
                                            <p>{product.price}kr</p>
                                            <button onClick={() => handleAdditionToCart(product)}>Lägg till i kundvagnen</button>
                                            {isLoggedIn && (
                                                <button onClick={() => handleRemovalOfProduct(product)}>Ta bort produkt</button>
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
