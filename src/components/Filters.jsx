// src/components/Filters.jsx
import { useState } from "react";

function Filters({ filters, setFilters }) {
    const sizes = ["4", "6", "8", "10", "12", "14", "16", "18", "XXS", "XS", "S", "M", "L", "XL"];
    const colors = ["White", "Black", "Navy Blue", "Blue", "Pink", "Red"];
    const priceRanges = [
        { label: "Rs. 1000 to Rs. 2999", min: 1000, max: 2999 },
        { label: "Rs. 3000 to Rs. 4999", min: 3000, max: 4999 },
        { label: "Rs. 5000 to Rs. 6999", min: 5000, max: 6999 },
        { label: "Rs. 7000 to Rs. 9999", min: 7000, max: 9999 },
        { label: "Rs. 10000 & Above", min: 10000, max: Infinity }
    ];
    const occasions = ["Casual Wear", "Party", "Evening", "Work", "Vacation"];

    return (
        <div className="filters-sidebar">
            <h3>Size</h3>
            {sizes.map(size => (
                <div key={size}>
                    <input
                        type="checkbox"
                        checked={filters.sizes.includes(size)}
                        onChange={e => {
                            const newSizes = e.target.checked ? [...filters.sizes, size] : filters.sizes.filter(s => s !== size);
                            setFilters({ ...filters, sizes: newSizes });
                        }}
                    /> {size}
                </div>
            ))}

            <h3>Color</h3>
            {colors.map(color => (
                <div key={color}>
                    <input
                        type="checkbox"
                        checked={filters.colors.includes(color)}
                        onChange={e => {
                            const newColors = e.target.checked ? [...filters.colors, color] : filters.colors.filter(c => c !== color);
                            setFilters({ ...filters, colors: newColors });
                        }}
                    /> {color}
                </div>
            ))}

            <h3>Price</h3>
            {priceRanges.map(range => (
                <div key={range.label}>
                    <input
                        type="radio"
                        name="price"
                        onChange={() => setFilters({ ...filters, priceRange: range })}
                    /> {range.label}
                </div>
            ))}

            <h3>Occasion</h3>
            {occasions.map(occ => (
                <div key={occ}>
                    <input
                        type="radio"
                        name="occasion"
                        onChange={() => setFilters({ ...filters, occasion: occ })}
                    /> {occ}
                </div>
            ))}

            <button
                style={{ marginTop: "20px", padding: "8px 15px" }}
                onClick={() => setFilters({ sizes: [], colors: [], priceRange: null, occasion: null, type: null })}
            >
                Reset Filters
            </button>
        </div>
    );
}

export default Filters;
