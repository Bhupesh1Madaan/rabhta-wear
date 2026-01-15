// src/pages/ContactUs.jsx
import React from "react";

function ContactUs() {
    return (
        <div style={{ width: "100%", color: "#222" }}>

            {/* Hero */}
            <section
                style={{
                    padding: "60px",
                    textAlign: "center",
                    backgroundColor: "#fafafa"
                }}
            >
                <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
                    Contact Us
                </h1>
                <p style={{ fontSize: "18px" }}>
                    Got questions? Feedback? Or just want to say hi — we’re here 💬
                </p>
            </section>

            {/* Main Content */}
            <section
                style={{
                    display: "flex",
                    gap: "60px",
                    padding: "60px",
                    flexWrap: "wrap",
                    alignItems: "flex-start"
                }}
            >
                {/* Form */}
                <div style={{ flex: "1", minWidth: "280px" }}>
                    <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
                        Get in Touch
                    </h2>

                    <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={inputStyle}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            style={inputStyle}
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            style={inputStyle}
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            style={inputStyle}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: "12px",
                                backgroundColor: "#d6336c",
                                color: "#fff",
                                fontSize: "16px",
                                borderRadius: "4px"
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Info */}
                <div style={{ flex: "1", minWidth: "280px" }}>
                    <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
                        Reach Us
                    </h2>

                    <p style={infoText}>
                        <strong>Email:</strong> support@rabhta.com
                    </p>
                    <p style={infoText}>
                        <strong>Phone:</strong> +91 12345 67890
                    </p>
                    <p style={infoText}>
                        <strong>Working Hours:</strong> Mon – Sat | 10 AM – 7 PM
                    </p>

                    <p style={{ marginTop: "20px", lineHeight: "1.7" }}>
                        Our support squad is always ready to help you with orders,
                        returns, sizing, or styling advice.
                        Because shopping should feel easy ✨
                    </p>

                    <img
                        src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
                        alt="Customer support fashion brand"
                        style={{
                            width: "100%",
                            marginTop: "30px",
                            borderRadius: "10px",
                            objectFit: "cover"
                        }}
                    />
                </div>
            </section>

        </div>
    );
}

const inputStyle = {
    padding: "12px",
    fontSize: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc"
};

const infoText = {
    fontSize: "16px",
    marginBottom: "10px"
};

export default ContactUs;
