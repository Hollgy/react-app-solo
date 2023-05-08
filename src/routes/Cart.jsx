import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";

const Cart = () => {
    const [cart, setCart] = useRecoilState(cartState);

    const removeItem = (id) => {
        setCart((prevState) => prevState.filter((item) => item.id !== id));
    };

    const totalPrice = cart.reduce((total, product) => {
        return total + product.price;
    }, 0);

    return (
        <section className="product wrapper">
            <div>
                <h2>Cart</h2>
                <p>Total Price: {totalPrice}</p>
                <ul>
                    {cart.map((product) => (
                        <li key={product.id}>
                            <h4>Produkter</h4>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <img className="product-image" src={product.picture} />
                            <button onClick={() => removeItem(product.id)}>Remove from cart</button>
                        </li>
                    ))}
                </ul>
            </div>
        </section >
    );
};

export default Cart;
