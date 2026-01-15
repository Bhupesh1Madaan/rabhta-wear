import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/products";
import { Heart, ShoppingBag, Truck, RotateCcw, Shield, Star } from "lucide-react";

function ProductDetails() {
    const { id } = useParams();

    // Find product by id or slug
    const product = productsData.find((p) => p.id === parseInt(id) || p.slug === id);

    const [mainImage, setMainImage] = useState(product?.image);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="container section text-center">
                <h2 className="text-2xl font-medium mb-4">Product not found</h2>
                <Link to="/products" className="btn-primary">
                    Back to Products
                </Link>
            </div>
        );
    }

    // Get all images (main + additional)
    const allImages = [product.image, ...(product.images || [])];

    // Calculate discount percentage
    const discountPercent = product.mrp ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;

    return (
        <div className="min-h-screen bg-white">
            <div className="container section">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="breadcrumb-separator">/</span>
                    <Link to="/products">All Products</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-active">{product.name}</span>
                </div>

                {/* Main Product Section */}
                <div
                    className="gap-8 mt-8"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr'
                    }}
                >
                    {/* Left: Images - STICKY */}
                    <div className="flex gap-4" style={{ position: 'sticky', top: '120px', alignSelf: 'flex-start' }}>
                        {/* Thumbnail Column */}
                        <div className="flex flex-col gap-3" style={{ width: '80px' }}>
                            {allImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setMainImage(img)}
                                    className="cursor-pointer overflow-hidden rounded transition-all"
                                    style={{
                                        border: mainImage === img ? "2px solid #000" : "1px solid #e5e7eb",
                                        aspectRatio: "3/4"
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt={`${product.name} view ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1">
                            <div
                                className="relative overflow-hidden rounded bg-gray-50"
                                style={{ aspectRatio: "3/4" }}
                            >
                                <img
                                    src={mainImage}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                {discountPercent > 0 && (
                                    <span className="badge-red absolute top-4 left-4">
                                        {discountPercent}% OFF
                                    </span>
                                )}
                                {product.tag && (
                                    <span className="product-badge">
                                        {product.tag}
                                    </span>
                                )}
                                <button className="product-wishlist">
                                    <Heart size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div>
                        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl mb-3">
                            {product.name}
                        </h1>

                        {/* Price Section */}
                        <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                            <span className="text-3xl font-bold">₹{product.price}</span>
                            {product.mrp && product.mrp > product.price && (
                                <>
                                    <span className="product-price-original text-xl">₹{product.mrp}</span>
                                    <span className="badge-green">{discountPercent}% OFF</span>
                                </>
                            )}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#fbbf24" stroke="#fbbf24" />
                                ))}
                            </div>
                            <span className="text-sm text-gray">(248 Reviews)</span>
                        </div>

                        {/* Short Description */}
                        {product.shortDescription && (
                            <p className="mb-6 text-gray leading-relaxed">
                                {product.shortDescription}
                            </p>
                        )}

                        {/* Color Selection */}
                        {product.colors && product.colors.length > 0 && (
                            <div className="mb-6">
                                <h3 className="font-semibold mb-3">
                                    Select Color {selectedColor && <span className="text-gray font-normal">: {selectedColor}</span>}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`px-4 py-2 border rounded transition-all ${selectedColor === color
                                                    ? "border-black bg-black text-white"
                                                    : "border-gray-300 hover:border-black"
                                                }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Size Selection */}
                        {product.sizes && product.sizes.length > 0 && (
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-semibold">
                                        Select Size {selectedSize && <span className="text-gray font-normal">: {selectedSize}</span>}
                                    </h3>
                                    <Link to="/size-guide" className="text-sm underline">
                                        Size Guide
                                    </Link>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-12 h-12 border rounded transition-all font-medium ${selectedSize === size
                                                    ? "border-black bg-black text-white"
                                                    : "border-gray-300 hover:border-black"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Quantity</h3>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:border-black transition-colors"
                                >
                                    −
                                </button>
                                <span className="w-12 text-center font-medium">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:border-black transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mb-8">
                            <button className="btn-primary flex-1 flex items-center justify-center gap-2">
                                <ShoppingBag size={20} />
                                Add to Bag
                            </button>
                            <Link to="/cart" className="btn-secondary flex-1 flex items-center justify-center">
                                Buy Now
                            </Link>
                        </div>

                        {/* Features/USP */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded mb-8">
                            <div className="flex items-start gap-3">
                                <Truck size={24} className="text-gray-700 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-medium text-sm">Free Delivery</h4>
                                    <p className="text-xs text-gray">On orders above ₹2,999</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <RotateCcw size={24} className="text-gray-700 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-medium text-sm">Easy Returns</h4>
                                    <p className="text-xs text-gray">7 days return policy</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield size={24} className="text-gray-700 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-medium text-sm">Secure Payment</h4>
                                    <p className="text-xs text-gray">100% secure checkout</p>
                                </div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="border-t pt-6">
                            <h3 className="font-semibold mb-4 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Product Details
                            </h3>

                            <div className="space-y-3 text-sm">
                                {product.styleNumber && (
                                    <div className="flex">
                                        <span className="font-medium w-40">Style Number:</span>
                                        <span className="text-gray flex-1">{product.styleNumber}</span>
                                    </div>
                                )}
                                {product.occasion && (
                                    <div className="flex">
                                        <span className="font-medium w-40">Occasion:</span>
                                        <span className="text-gray flex-1">{product.occasion}</span>
                                    </div>
                                )}
                                {product.fit && (
                                    <div className="flex">
                                        <span className="font-medium w-40">Fit:</span>
                                        <span className="text-gray flex-1">{product.fit}</span>
                                    </div>
                                )}
                                {product.printType && (
                                    <div className="flex">
                                        <span className="font-medium w-40">Print Type:</span>
                                        <span className="text-gray flex-1">{product.printType}</span>
                                    </div>
                                )}
                                {product.productLength && (
                                    <div className="flex">
                                        <span className="font-medium w-40">Product Length:</span>
                                        <span className="text-gray flex-1">{product.productLength}</span>
                                    </div>
                                )}
                                {product.sleeveType && (
                                    <div className="flex">
                                        <span className="font-medium w-40">Sleeve Type:</span>
                                        <span className="text-gray flex-1">{product.sleeveType}</span>
                                    </div>
                                )}
                                {product.neckCollar && (
                                    <div className="flex">
                                        <span className="font-medium w-40">Neck/Collar:</span>
                                        <span className="text-gray flex-1">{product.neckCollar}</span>
                                    </div>
                                )}
                                {product.sleeveLength && (
                                    <div className="flex">
                                        <span className="font-medium w-40">Sleeve Length:</span>
                                        <span className="text-gray flex-1">{product.sleeveLength}</span>
                                    </div>
                                )}
                                {product.hemline && (
                                    <div className="flex">
                                        <span className="font-medium w-40">Hemline:</span>
                                        <span className="text-gray flex-1">{product.hemline}</span>
                                    </div>
                                )}
                                {product.closure && (
                                    <div className="flex">
                                        <span className="font-medium w-40">Closure:</span>
                                        <span className="text-gray flex-1">{product.closure}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Material & Care */}
                        {product.materialWashCare && (
                            <div className="border-t pt-6 mt-6">
                                <h3 className="font-semibold mb-3">Material & Wash Care</h3>
                                <p className="text-sm text-gray">{product.materialWashCare}</p>
                            </div>
                        )}

                        {/* Model Info */}
                        {product.modelInfo && (
                            <div className="border-t pt-6 mt-6">
                                <h3 className="font-semibold mb-3">Model Information</h3>
                                <p className="text-sm text-gray">{product.modelInfo}</p>
                            </div>
                        )}

                        {/* Delivery & Returns */}
                        {product.deliveryReturns && (
                            <div className="border-t pt-6 mt-6">
                                <h3 className="font-semibold mb-3">Delivery & Returns</h3>
                                <p className="text-sm text-gray">{product.deliveryReturns}</p>
                            </div>
                        )}

                        {/* Manufacturer Info */}
                        {(product.manufacturer || product.countryOfOrigin) && (
                            <div className="border-t pt-6 mt-6">
                                <h3 className="font-semibold mb-3">Manufacturer Details</h3>
                                {product.countryOfOrigin && (
                                    <p className="text-sm text-gray mb-2">
                                        <strong>Country of Origin:</strong> {product.countryOfOrigin}
                                    </p>
                                )}
                                {product.manufacturer && (
                                    <p className="text-sm text-gray">
                                        <strong>Manufacturer:</strong> {product.manufacturer}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-16 pt-16 border-t">
                    <h2 className="text-3xl mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                        You Might Also Like
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {productsData
                            .filter((p) => p.id !== product.id && p.occasion === product.occasion)
                            .slice(0, 4)
                            .map((p) => (
                                <Link to={`/product/${p.slug || p.id}`} key={p.id}>
                                    <div className="product-card">
                                        <div className="product-card-image">
                                            <img
                                                src={p.image}
                                                alt={p.name}
                                                className="w-full h-full object-cover"
                                            />
                                            {p.tag && (
                                                <span className="product-badge">{p.tag}</span>
                                            )}
                                            <div className="product-wishlist">
                                                <Heart size={18} />
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-name">{p.name}</h3>
                                            <div className="flex items-center gap-2">
                                                <p className="product-price">₹{p.price}</p>
                                                {p.mrp && p.mrp > p.price && (
                                                    <span className="product-price-original">₹{p.mrp}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;