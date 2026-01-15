// src/pages/Account.jsx
import { useState } from "react";

function Account() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        address: ""
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account details saved (dummy)");
    }

    return (
        <div className="account-page" style={{ maxWidth: "600px", margin: "50px auto", padding: "20px" }}>
            <h1>My Account</h1>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </label>

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Enter new password"
                        required
                    />
                </label>

                <label>
                    Address:
                    <textarea
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        rows="4"
                    />
                </label>

                <button type="submit" className="primary">Save Changes</button>
            </form>

            <div className="account-orders" style={{ marginTop: "50px" }}>
                <h2>Order History</h2>
                <p>No orders yet (dummy)</p>
            </div>
        </div>
    );
}

export default Account;
