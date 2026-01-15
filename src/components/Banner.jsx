// src/components/Banner.jsx
function Banner() {
    return (
        <div className="banner" style={{ margin: "20px 0", textAlign: "center" }}>
            <img
                src="/images/banner1.jpg"
                alt="Rabhta Banner"
                style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "8px" }}
            />
        </div>
    );
}

export default Banner;
