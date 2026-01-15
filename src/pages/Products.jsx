import React, { useState } from "react";
import productsData from "../data/products";
import { Link } from "react-router-dom";
import { Heart, X, SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";

function Products() {
    const [filters, setFilters] = useState({
        color: [],
        size: [],
        price: null,
        occasion: "",
        sort: "featured",
    });

    const [filtersOpen, setFiltersOpen] = useState(false);
    const [appliedFilters, setAppliedFilters] = useState({
        color: [],
        size: [],
        price: null,
        occasion: "",
        sort: "featured",
    });

    // Toggle filters
    const toggleFilters = () => setFiltersOpen(!filtersOpen);

    // Handle filter selection
    const handleFilterChange = (type, value) => {
        setFilters((prev) => {
            if (type === "color" || type === "size") {
                const arr = prev[type];
                if (arr.includes(value)) {
                    return { ...prev, [type]: arr.filter((v) => v !== value) };
                } else {
                    return { ...prev, [type]: [...arr, value] };
                }
            } else {
                return { ...prev, [type]: value };
            }
        });
    };

    // Apply filters
    const applyFilters = () => {
        setAppliedFilters({ ...filters });
        setFiltersOpen(false);
    };

    // Reset filters
    const resetFilters = () => {
        const empty = { color: [], size: [], price: null, occasion: "", sort: "featured" };
        setFilters(empty);
        setAppliedFilters(empty);
    };

    // Clear individual filter
    const clearFilter = (type, value = null) => {
        setFilters((prev) => {
            if (type === "color" || type === "size") {
                return { ...prev, [type]: prev[type].filter((v) => v !== value) };
            } else {
                return { ...prev, [type]: type === "color" || type === "size" ? [] : "" };
            }
        });
        setAppliedFilters((prev) => {
            if (type === "color" || type === "size") {
                return { ...prev, [type]: prev[type].filter((v) => v !== value) };
            } else {
                return { ...prev, [type]: type === "color" || type === "size" ? [] : "" };
            }
        });
    };

    // Filter products
    let filteredProducts = productsData.filter((p) => {
        const { color, size, price, occasion } = appliedFilters;

        let colorMatch =
            !color || color.length === 0 || color.some((c) => p.colors.includes(c));
        let sizeMatch =
            !size || size.length === 0 || size.some((s) => p.sizes.includes(s));
        let occasionMatch = !occasion || p.occasion === occasion;
        let priceMatch = true;
        if (price) {
            if (price === "0-1999") priceMatch = p.price <= 1999;
            if (price === "2000-3999") priceMatch = p.price >= 2000 && p.price <= 3999;
            if (price === "4000+") priceMatch = p.price >= 4000;
        }

        return colorMatch && sizeMatch && occasionMatch && priceMatch;
    });

    // Sort products
    if (appliedFilters.sort === "price-low") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (appliedFilters.sort === "price-high") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (appliedFilters.sort === "name") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
    }

    // Get unique values for filters
    const availableColors = [...new Set(productsData.flatMap(p => p.colors))];
    const availableSizes = [...new Set(productsData.flatMap(p => p.sizes))];
    const availableOccasions = [...new Set(productsData.map(p => p.occasion).filter(Boolean))];

    // Count active filters
    const activeFilterCount =
        appliedFilters.color.length +
        appliedFilters.size.length +
        (appliedFilters.price ? 1 : 0) +
        (appliedFilters.occasion ? 1 : 0);

    return (
        <div className="min-h-screen bg-white">
            <div className="container section">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-active">All Products</span>
                </div>

                {/* Page Heading */}
                <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="mb-4">
                    All Products
                </h1>
                <p className="mb-8 text-gray">
                    Explore our entire collection of trendy women's western wear. Perfect
                    for Gen Z & Millennials who love effortless style.
                </p>

                {/* Top Bar with Filters and Sort */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b">
                    <div className="flex items-center gap-4">
                        {/* Filters Button */}
                        <button
                            onClick={toggleFilters}
                            className="btn-secondary flex items-center gap-2"
                        >
                            <SlidersHorizontal size={18} />
                            {filtersOpen ? 'Hide Filters' : 'Show Filters'}
                            {activeFilterCount > 0 && (
                                <span className="badge-black ml-1">{activeFilterCount}</span>
                            )}
                            {filtersOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>

                        <p className="text-sm text-gray">
                            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
                        </p>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="sort" className="text-sm font-medium">Sort by:</label>
                        <select
                            id="sort"
                            value={appliedFilters.sort}
                            onChange={(e) => {
                                const newSort = e.target.value;
                                setFilters(prev => ({ ...prev, sort: newSort }));
                                setAppliedFilters(prev => ({ ...prev, sort: newSort }));
                            }}
                            className="border rounded px-3 py-2 text-sm cursor-pointer"
                            style={{ width: 'auto', minWidth: '150px' }}
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name">Name: A to Z</option>
                        </select>
                    </div>
                </div>

                {/* Horizontal Filters Section with Smooth Animation */}
                <div
                    style={{
                        maxHeight: filtersOpen ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.5s ease-in-out, opacity 0.3s ease-in-out, margin-bottom 0.3s ease-in-out',
                        opacity: filtersOpen ? 1 : 0,
                        marginBottom: filtersOpen ? '2rem' : '0'
                    }}
                >
                    <div className="bg-gray-50 border rounded p-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {/* Color Filter */}
                            <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                    <span className="w-1 h-5 bg-black"></span>
                                    Color
                                </h4>
                                <div className="space-y-2 max-h-48 overflow-y-auto">
                                    {availableColors.map((c) => (
                                        <label key={c} className="flex items-center cursor-pointer hover:bg-white px-2 py-1 rounded transition-colors">
                                            <input
                                                type="checkbox"
                                                checked={filters.color.includes(c)}
                                                onChange={() => handleFilterChange("color", c)}
                                                className="mr-2 cursor-pointer"
                                            />
                                            <span className="text-sm">{c}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Size Filter */}
                            <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                    <span className="w-1 h-5 bg-black"></span>
                                    Size
                                </h4>
                                <div className="space-y-2 max-h-48 overflow-y-auto">
                                    {availableSizes.map((s) => (
                                        <label key={s} className="flex items-center cursor-pointer hover:bg-white px-2 py-1 rounded transition-colors">
                                            <input
                                                type="checkbox"
                                                checked={filters.size.includes(s)}
                                                onChange={() => handleFilterChange("size", s)}
                                                className="mr-2 cursor-pointer"
                                            />
                                            <span className="text-sm">{s}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                    <span className="w-1 h-5 bg-black"></span>
                                    Price Range
                                </h4>
                                <div className="space-y-2">
                                    {["0-1999", "2000-3999", "4000+"].map((p) => (
                                        <label key={p} className="flex items-center cursor-pointer hover:bg-white px-2 py-1 rounded transition-colors">
                                            <input
                                                type="radio"
                                                name="price"
                                                checked={filters.price === p}
                                                onChange={() => handleFilterChange("price", p)}
                                                className="mr-2 cursor-pointer"
                                            />
                                            <span className="text-sm">₹{p}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Occasion Filter */}
                            <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                    <span className="w-1 h-5 bg-black"></span>
                                    Occasion
                                </h4>
                                <div className="space-y-2 max-h-48 overflow-y-auto">
                                    {availableOccasions.map((o) => (
                                        <label key={o} className="flex items-center cursor-pointer hover:bg-white px-2 py-1 rounded transition-colors">
                                            <input
                                                type="radio"
                                                name="occasion"
                                                checked={filters.occasion === o}
                                                onChange={() => handleFilterChange("occasion", o)}
                                                className="mr-2 cursor-pointer"
                                            />
                                            <span className="text-sm">{o}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Filter Action Buttons */}
                        <div className="flex gap-3 mt-6 pt-4 border-t justify-end">
                            <button onClick={resetFilters} className="btn-outline">
                                Clear All
                            </button>
                            <button onClick={applyFilters} className="btn-primary">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>

                {/* Active Filters Display */}
                {activeFilterCount > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                        <span className="text-sm font-medium">Active Filters:</span>

                        {appliedFilters.color.map((c) => (
                            <span key={c} className="badge-white flex items-center gap-2">
                                {c}
                                <X
                                    size={14}
                                    className="cursor-pointer"
                                    onClick={() => clearFilter("color", c)}
                                />
                            </span>
                        ))}

                        {appliedFilters.size.map((s) => (
                            <span key={s} className="badge-white flex items-center gap-2">
                                Size: {s}
                                <X
                                    size={14}
                                    className="cursor-pointer"
                                    onClick={() => clearFilter("size", s)}
                                />
                            </span>
                        ))}

                        {appliedFilters.price && (
                            <span className="badge-white flex items-center gap-2">
                                ₹{appliedFilters.price}
                                <X
                                    size={14}
                                    className="cursor-pointer"
                                    onClick={() => clearFilter("price")}
                                />
                            </span>
                        )}

                        {appliedFilters.occasion && (
                            <span className="badge-white flex items-center gap-2">
                                {appliedFilters.occasion}
                                <X
                                    size={14}
                                    className="cursor-pointer"
                                    onClick={() => clearFilter("occasion")}
                                />
                            </span>
                        )}

                        <button
                            onClick={resetFilters}
                            className="text-sm underline cursor-pointer ml-2"
                        >
                            Clear All
                        </button>
                    </div>
                )}

                {/* Products Grid with Smooth Transition */}
                <div
                    style={{
                        transition: 'transform 0.5s ease-in-out',
                        transform: filtersOpen ? 'translateY(0)' : 'translateY(0)'
                    }}
                >
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <Link to={`/product/${product.slug || product.id}`} key={product.id}>
                                    <div className="product-card">
                                        <div className="product-card-image">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                            {product.tag && (
                                                <span className="product-badge">{product.tag}</span>
                                            )}
                                            <div className="product-wishlist">
                                                <Heart size={18} />
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-name">{product.name}</h3>
                                            <div className="flex items-center gap-2">
                                                <p className="product-price">₹{product.price}</p>
                                                {product.mrp && product.mrp > product.price && (
                                                    <span className="product-price-original">₹{product.mrp}</span>
                                                )}
                                            </div>
                                            {product.shortDescription && (
                                                <p className="text-sm text-gray mt-1">{product.shortDescription}</p>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="text-xl font-medium mb-2">No products found</h3>
                            <p className="text-gray mb-4">Try adjusting your filters</p>
                            <button onClick={resetFilters} className="btn-secondary">
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;