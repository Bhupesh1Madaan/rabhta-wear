// src/pages/About.jsx
import React from "react";

function About() {
    return (
        <div style={{ width: "100%", color: "#222" }}>

            {/* Hero Section */}
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "40px",
                    padding: "60px",
                    flexWrap: "wrap"
                }}
            >
                <div style={{ maxWidth: "500px" }}>
                    <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
                        About Rabhta
                    </h1>
                    <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
                        Where modern women, bold moods, and effortless western wear come together.
                    </p>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1520975922284-8b456906c813"
                    alt="Rabhta women western fashion"
                    style={{
                        width: "420px",
                        maxWidth: "100%",
                        borderRadius: "10px",
                        objectFit: "cover"
                    }}
                />
            </section>

            {/* Story Section */}
            <section style={{ padding: "0 60px 60px" }}>
                <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
                    Our Story
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.7", marginBottom: "15px" }}>
                    Rabhta was born from a simple idea — women deserve clothes that feel confident,
                    comfortable, and completely them. Inspired by global fashion and rooted in
                    Indian sensibilities, Rabhta blends contemporary silhouettes with everyday
                    wearability.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
                    From workdays to weekends, casual brunches to late-night plans, our collections
                    are designed for women who own their vibe — unapologetically.
                </p>
            </section>

            {/* Values */}
            <section style={{ padding: "0 60px 60px" }}>
                <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
                    What We Stand For
                </h2>
                <ul style={{ fontSize: "16px", lineHeight: "1.8", paddingLeft: "20px" }}>
                    <li>Style that speaks — trend-driven but timeless</li>
                    <li>Comfort first — fabrics that move with you</li>
                    <li>Designed for Gen-Z & Millennials</li>
                    <li>Quality over hype — always</li>
                </ul>
            </section>

            {/* Split Section */}
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "40px",
                    padding: "0 60px 60px",
                    flexWrap: "wrap"
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                    alt="Women western outfits editorial"
                    style={{
                        width: "420px",
                        maxWidth: "100%",
                        borderRadius: "10px",
                        objectFit: "cover"
                    }}
                />
                <div style={{ maxWidth: "500px" }}>
                    <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
                        Designed for Every Mood
                    </h2>
                    <p style={{ fontSize: "16px", lineHeight: "1.7", marginBottom: "10px" }}>
                        Whether you’re feeling minimal, bold, soft, or edgy — Rabhta has something
                        that fits your moment.
                    </p>
                    <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
                        Clean cuts, modern fits, and versatile styles you’ll keep reaching for —
                        that’s our design promise.
                    </p>
                </div>
            </section>

            {/* Trust */}
            <section style={{ padding: "0 60px 80px" }}>
                <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
                    Why Rabhta?
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.7", marginBottom: "10px" }}>
                    We don’t just sell clothes — we create experiences. Every piece goes through
                    thoughtful design, fabric selection, and fit testing.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
                    Trusted by women across India, Rabhta is redefining western wear —
                    one outfit at a time.
                </p>
            </section>

        </div>
    );
}

export default About;
