// src/pages/Wishlist.jsx
import { Link } from "react-router-dom";

function Wishlist({ wishlistItems, setWishlistItems, cartItems, setCartItems }) {

    // Remove item from wishlist
    const handleRemove = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    // Add item to cart
    const handleAddToCart = (product) => {
        const exists = cartItems.find(item => item.id === product.id);
        if (exists) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="wishlist-page" style={{ maxWidth: "1000px", margin: "50px auto", padding: "20px" }}>
            <h1>My Wishlist</h1>

            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className="wishlist-items" style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
                    {wishlistItems.map(item => (
                        <div key={item.id} className="wishlist-item" style={{ display: "flex", gap: "20px", borderBottom: "1px solid #eee", paddingBottom: "15px" }}>
                            <div className="wishlist-img" style={{ width: "120px" }}>
                                <Link to={`/product/${item.id}`}>
                                    <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "8px" }} />
                                </Link>
                            </div>
                            <div className="wishlist-info" style={{ flex: 1 }}>
                                <h3>{item.name}</h3>
                                <p>Price: ₹{item.price} <span className="mrp" style={{ textDecoration: "line-through", color: "#999" }}>₹{item.mrp}</span></p>
                                <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                                    <button onClick={() => handleAddToCart(item)} className="primary" style={{ padding: "5px 10px" }}>Add to Cart</button>
                                    <button onClick={() => handleRemove(item.id)} className="secondary" style={{ padding: "5px 10px", background: "red", color: "#fff" }}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Wishlist;
