// src/pages/Cart.jsx
import { useState } from "react";
import productsData from "../data/products";

function Cart() {
    // Dummy cart items (initially 2 products)
    const [cartItems, setCartItems] = useState([
        { ...productsData[0], quantity: 1 },
        { ...productsData[1], quantity: 2 }
    ]);

    const handleQuantityChange = (id, value) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: Number(value) } : item
        );
        setCartItems(updatedCart);
    };

    const handleRemove = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-page" style={{ maxWidth: "1000px", margin: "50px auto", padding: "20px" }}>
            <h1>My Cart</h1>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items" style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item" style={{ display: "flex", gap: "20px", borderBottom: "1px solid #eee", paddingBottom: "15px" }}>
                                <div className="cart-img" style={{ width: "120px" }}>
                                    <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "8px" }} />
                                </div>
                                <div className="cart-info" style={{ flex: 1 }}>
                                    <h3>{item.name}</h3>
                                    <p>Price: ₹{item.price}</p>
                                    <p>MRP: <span className="mrp">₹{item.mrp}</span></p>
                                    <label>
                                        Quantity:
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                            style={{ width: "60px", marginLeft: "10px" }}
                                        />
                                    </label>
                                    <button onClick={() => handleRemove(item.id)} style={{ marginLeft: "15px", background: "red", color: "#fff", borderRadius: "4px", padding: "5px 10px", cursor: "pointer" }}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary" style={{ marginTop: "30px", textAlign: "right" }}>
                        <h2>Subtotal: ₹{subtotal}</h2>
                        <button className="primary" style={{ marginTop: "10px" }}>Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
