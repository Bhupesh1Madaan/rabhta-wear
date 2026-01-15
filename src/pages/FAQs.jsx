// src/pages/FAQs.jsx
import React from "react";

function FAQs() {
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
                    FAQs
                </h1>
                <p style={{ fontSize: "18px" }}>
                    Everything you need to know before you add to bag 🛍️
                </p>
            </section>

            {/* FAQ Content */}
            <section style={{ padding: "60px", maxWidth: "900px", margin: "0 auto" }}>

                {faqItem(
                    "How long does delivery take?",
                    "Orders are usually delivered within 3–7 business days depending on your location."
                )}

                {faqItem(
                    "What is your return policy?",
                    "We offer easy returns within 7 days of delivery, provided the product is unused and tags are intact."
                )}

                {faqItem(
                    "How do I track my order?",
                    "Once your order is shipped, you’ll receive a tracking link via email and SMS."
                )}

                {faqItem(
                    "Are Rabhta products true to size?",
                    "Yes! Our styles are designed with accurate sizing. We recommend checking the size guide before ordering."
                )}

                {faqItem(
                    "What payment methods do you accept?",
                    "We accept UPI, Credit/Debit Cards, Net Banking, and popular wallets."
                )}

                {faqItem(
                    "Can I cancel my order?",
                    "Orders can be cancelled before they are shipped. Once shipped, cancellation isn’t possible."
                )}

                {faqItem(
                    "Is Cash on Delivery available?",
                    "Yes, COD is available on selected pin codes."
                )}

                {faqItem(
                    "How can I contact customer support?",
                    "You can reach us at support@rabhta.com or through the Contact Us page."
                )}

            </section>

        </div>
    );
}

function faqItem(question, answer) {
    return (
        <div
            style={{
                marginBottom: "30px",
                paddingBottom: "20px",
                borderBottom: "1px solid #eee"
            }}
        >
            <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                {question}
            </h3>
            <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#555" }}>
                {answer}
            </p>
        </div>
    );
}

export default FAQs;
