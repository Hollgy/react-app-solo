import { useRecoilState } from "recoil";
import { productState } from "../atoms/productAtom";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const [products] = useRecoilState(productState);
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));
    console.log("produktDetail + id", products, typeof id);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.picture} />
            <button>Add to cart</button>
        </div>
    );
};

export default ProductDetail;