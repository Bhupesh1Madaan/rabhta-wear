// src/pages/Blog.jsx
import React from "react";

function Blog() {
    return (
        <div style={{ width: "100%", color: "#222" }}>
            {/* Hero */}
            <section style={{ padding: "60px", textAlign: "center", backgroundColor: "#fafafa" }}>
                <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>Style Blog</h1>
                <p style={{ fontSize: "18px" }}>Tips, trends, and vibes for modern women 👗✨</p>
            </section>

            {/* Blog Grid */}
            <section style={{ display: "grid", gap: "30px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", padding: "60px" }}>
                {[1, 2, 3, 4].map((post) => (
                    <div key={post} style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "all 0.3s ease"
                    }}>
                        <img
                            src={`https://images.unsplash.com/photo-1530882832231-7e7c097b1e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400`}
                            alt="Rabhta Blog"
                            style={{ width: "100%", height: "220px", objectFit: "cover" }}
                        />
                        <div style={{ padding: "15px" }}>
                            <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Top 5 Summer Styles</h3>
                            <p style={{ fontSize: "14px", color: "#6b7280" }}>
                                Discover the must-have western outfits for this season.
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Blog;
