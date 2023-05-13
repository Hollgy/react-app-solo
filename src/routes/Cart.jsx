import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";
import { useState } from "react";
import "../styles/products.css"


const Cart = () => {
    const [cart, setCart] = useRecoilState(cartState);
    const [quantity, setQuantity] = useState({});

    const removeItem = (id) => {
        setCart((prevState) => prevState.filter((item) => item.id !== id));
        setQuantity((prevState) => {
            const newState = { ...prevState };
            delete newState[id];
            return newState;
        });
    };

    const updateQuantity = (id, increment) => {
        setQuantity((prevState) => ({
            ...prevState,
            [id]: prevState[id] ? prevState[id] + increment : 1,
        }));
    };

    const totalPrice = cart.reduce((total, product) => {
        return total + product.price * (quantity[product.id] || 1);
    }, 0);

    return (
        <section className="product wrapper">
            <div>
                <h2>Cart</h2>
                <p>Total Price: {totalPrice}</p>
                {cart.reduce((acc, product) => {
                    if (!acc.some(item => item.id === product.id)) {
                        acc.push(product);
                    }
                    return acc;
                }, []).map((product) => (
                    <ul key={product.id}>
                        <li className="product-card">
                            <h4>Produkter</h4>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <img className="product-image" src={product.picture} />
                            <div>
                                <button className="quantity-button" onClick={() => updateQuantity(product.id, -1)}>-</button>
                                <span>{quantity[product.id] || 1}</span>
                                <button className="quantity-button" onClick={() => updateQuantity(product.id, 1)}>+</button>
                                <button onClick={() => removeItem(product.id)}>Remove from cart</button>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </section >
    );
};

export default Cart;
