// src/components/CategoriesTop.jsx
function CategoriesTop({ categories, filters, setFilters }) {
    return (
        <div className="categories-top">
            {categories.map(cat => (
                <button key={cat} onClick={() => setFilters({ ...filters, type: cat.toLowerCase() })}>
                    {cat}
                </button>
            ))}
            <button onClick={() => setFilters({ ...filters, type: null })}>All</button>
        </div>
    );
}

export default CategoriesTop;
