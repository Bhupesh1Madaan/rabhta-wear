// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <Link to={`/product/${product.id}`}>
            <div className="card">
                <div className="img-box">
                    <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p>₹{product.price} <span className="mrp">₹{product.mrp}</span></p>
            </div>
        </Link>
    );
}

export default ProductCard;
