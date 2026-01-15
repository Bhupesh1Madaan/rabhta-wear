// src/pages/GiftCards.jsx
import React from "react";

function GiftCards() {
    return (
        <div style={{ width: "100%", color: "#222" }}>
            {/* Hero */}
            <section style={{ padding: "60px", textAlign: "center", backgroundColor: "#fafafa" }}>
                <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>Gift Cards</h1>
                <p style={{ fontSize: "18px" }}>Give the gift of style 🎁 — perfect for your bestie, sister, or yourself!</p>
            </section>

            {/* Gift Card Options */}
            <section style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center", padding: "60px" }}>
                {[500, 1000, 1500, 2000].map((amount) => (
                    <div key={amount} style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: "10px",
                        padding: "40px 30px",
                        width: "220px",
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "all 0.3s ease"
                    }}>
                        <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "10px" }}>₹{amount}</h2>
                        <p style={{ fontSize: "16px", color: "#6b7280" }}>Gift Card</p>
                        <button style={{
                            marginTop: "15px",
                            padding: "10px 20px",
                            backgroundColor: "#d6336c",
                            color: "#fff",
                            borderRadius: "4px",
                            fontWeight: "500"
                        }}>Buy Now</button>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default GiftCards;
