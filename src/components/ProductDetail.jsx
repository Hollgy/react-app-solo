import { useRecoilState } from "recoil";
import { productState } from "../atoms/productAtom";
import { useParams } from "react-router-dom";
import { cartState } from "../atoms/cartState";
import "../styles/products.css"

const ProductDetail = () => {
    const [products] = useRecoilState(productState);
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));
    const [cart, setCart] = useRecoilState(cartState)

    // console.log("produktDetail + id", products, typeof id);

    const handleAdditionToCart = (product) => {
        setCart([...cart, product])
    }

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <section>
            <div className="detail-wrapper">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <img src={product.picture} className="product-image" />
                <button onClick={() => handleAdditionToCart(product)}>Add to cart</button>
            </div>
        </section>
    );
};

export default ProductDetail;
