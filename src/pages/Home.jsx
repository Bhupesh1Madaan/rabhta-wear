import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown, Star, Truck, Shield, Sparkles } from 'lucide-react';

const Home = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);

    const categories = [
        { name: 'Dresses', items: ['Maxi Dresses', 'Mini Dresses', 'Midi Dresses', 'Evening Dresses', 'Casual Dresses'] },
        { name: 'Kaftans', items: ['Silk Kaftans', 'Cotton Kaftans', 'Beach Kaftans', 'Embroidered Kaftans'] },
        { name: 'Skirts', items: ['A-Line Skirts', 'Pencil Skirts', 'Pleated Skirts', 'Wrap Skirts', 'Maxi Skirts'] },
        { name: 'Night Suits', items: ['Silk Night Suits', 'Cotton Sets', 'Satin Pajamas', 'Loungewear'] },
    ];

    const featuredProducts = [
        { id: 1, name: 'Silk Maxi Dress', price: '₹4,999', tag: 'New', color: 'bg-rose-200' },
        { id: 2, name: 'Embroidered Kaftan', price: '₹3,499', tag: 'Trending', color: 'bg-amber-200' },
        { id: 3, name: 'Pleated Midi Skirt', price: '₹2,799', tag: 'Bestseller', color: 'bg-purple-200' },
        { id: 4, name: 'Satin Night Suit', price: '₹3,999', tag: 'New', color: 'bg-blue-200' },
    ];

    const newArrivals = [
        { id: 5, name: 'Floral Summer Dress', price: '₹3,299', color: 'bg-pink-200' },
        { id: 6, name: 'Velvet Evening Kaftan', price: '₹5,499', color: 'bg-indigo-200' },
        { id: 7, name: 'High-Waist Denim Skirt', price: '₹2,199', color: 'bg-teal-200' },
        { id: 8, name: 'Cotton Lounge Set', price: '₹2,899', color: 'bg-green-200' },
    ];

    const categoryImages = [
        { color: 'bg-rose-300' },
        { color: 'bg-amber-300' },
        { color: 'bg-purple-300' },
        { color: 'bg-blue-300' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Top Banner */}
            <div className="bg-black text-white text-center py-2 text-sm">
                <p>Free Shipping on Orders Above ₹2,999 | Use Code: RABHTA50</p>
            </div>

            {/* Header */}
            <header className="border-b sticky top-0 bg-white z-50">
                <div className="container">
                    {/* Top Header */}
                    <div className="flex items-center justify-between py-4">
                        <button
                            className="lg:hidden cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        <h1 className="text-3xl font-semibold mb-5" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '2px' }}>
                            RABHTA
                        </h1>

                        <div className="flex items-center gap-4">
                            <Search className="cursor-pointer transition-colors" size={20} />
                            <User className="cursor-pointer transition-colors" size={20} />
                            <Heart className="cursor-pointer transition-colors" size={20} />
                            <div className="relative">
                                <ShoppingBag className="cursor-pointer transition-colors" size={20} />
                                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    0
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden lg:flex justify-center pb-4 text-sm" style={{ gap: '2rem', letterSpacing: '1px' }}>
                        <a href="#" className="transition-colors font-medium">NEW ARRIVALS</a>
                        {categories.map((cat) => (
                            <div
                                key={cat.name}
                                className="relative"
                                onMouseEnter={() => setActiveCategory(cat.name)}
                                onMouseLeave={() => setActiveCategory(null)}
                            >
                                <a href="#" className="transition-colors flex items-center gap-1 font-medium">
                                    {cat.name.toUpperCase()}
                                    <ChevronDown size={16} />
                                </a>
                                {activeCategory === cat.name && (
                                    <div className="absolute top-full left-0 bg-white shadow-lg min-w-[300px] slide-down p-4">
                                        {cat.items.map((item) => (
                                            <a key={item} href="#" className="block py-2 transition-colors text-sm font-normal whitespace-nowrap">
                                                {item}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <a href="#" className="transition-colors text-red font-medium">SALE</a>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-white z-40 overflow-y-auto fade-in">
                    <div className="p-6">
                        <button onClick={() => setIsMobileMenuOpen(false)} className="mb-6">
                            <X size={24} />
                        </button>
                        {categories.map((cat) => (
                            <div key={cat.name} className="mb-4">
                                <h3 className="font-medium mb-2">{cat.name}</h3>
                                {cat.items.map((item) => (
                                    <a key={item} href="#" className="block py-2 text-sm text-gray">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative" style={{ height: '600px', background: 'linear-gradient(135deg, #fce7f3 0%, #f3e8ff 50%, #fef3c7 100%)' }}>
                <div className="relative inset-0 w-full flex items-center justify-center h-full absolute">
                    <div className="text-center px-4 items-center justify-center">
                        <h2 className="text-5xl md:text-7xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Elegance Redefined
                        </h2>
                        <p className="text-xl md:text-2xl mb-8 font-light text-gray-700">
                            Discover The New Collection
                        </p>
                        <button className="btn-primary">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section border-b">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <Truck className="mb-3" size={32} />
                            <h3 className="font-medium mb-1">Free Shipping</h3>
                            <p className="text-sm text-gray">On orders above ₹2,999</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Shield className="mb-3" size={32} />
                            <h3 className="font-medium mb-1">Secure Payment</h3>
                            <p className="text-sm text-gray">100% secure transactions</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Sparkles className="mb-3" size={32} />
                            <h3 className="font-medium mb-1">Premium Quality</h3>
                            <p className="text-sm text-gray">Handpicked fabrics & designs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Shop By Category
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {categories.map((cat, idx) => (
                            <div key={cat.name} className="cursor-pointer transition-transform" style={{ transition: 'transform 0.3s ease' }}>
                                <div
                                    className={`relative overflow-hidden mb-3 ${categoryImages[idx].color} flex items-center justify-center`}
                                    style={{ aspectRatio: '3/4' }}
                                >
                                    <span className="text-white text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        {cat.name}
                                    </span>
                                </div>
                                <h3 className="text-center font-medium" style={{ letterSpacing: '1px' }}>
                                    {cat.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section bg-gray-50">
                <div className="container">
                    <h2 className="text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Featured Collection
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="product-card bg-white">
                                <div className={`product-card-image ${product.color} flex items-center justify-center`}>
                                    <span className="text-gray-700 text-sm font-medium text-center px-4">
                                        {product.name}
                                    </span>
                                    {product.tag && (
                                        <span className="product-badge">
                                            {product.tag}
                                        </span>
                                    )}
                                    <div className="product-wishlist">
                                        <Heart size={18} />
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-price">{product.price}</p>
                                    <div className="product-rating">
                                        <div className="product-rating-stars">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill="#fbbf24" stroke="#fbbf24" />
                                            ))}
                                        </div>
                                        <span className="product-rating-count">(248)</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link className="btn-secondary" to="/products">
                            VIEW ALL PRODUCTS
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sale Banner */}
            <section className="relative" style={{ height: '400px', background: 'linear-gradient(90deg, #fda4af 0%, #c084fc 50%, #818cf8 100%)' }}>
                <div className="absolute inset-0 flex items-center">
                    <div className="container">
                        <div className="text-gray-900 max-w-md">
                            <h2 className="text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Mid-Season Sale
                            </h2>
                            <p className="text-xl mb-6">Up to 50% Off on Selected Items</p>
                            <button className="btn-primary">
                                SHOP SALE
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Arrivals */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                        New Arrivals
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {newArrivals.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className={`product-card-image ${product.color} flex items-center justify-center`}>
                                    <span className="text-gray-700 text-sm font-medium text-center px-4">
                                        {product.name}
                                    </span>
                                    <div className="product-wishlist">
                                        <Heart size={18} />
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-price">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section bg-black text-white">
                <div className="container text-center" style={{ maxWidth: '800px' }}>
                    <h2 className="mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Join The RABHTA Family
                    </h2>
                    <p className="mb-8 text-gray-300">
                        Subscribe to get exclusive offers, style tips, and first access to new collections
                    </p>
                    <div className="flex gap-2 mx-auto" style={{ maxWidth: '500px' }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1"
                            style={{ color: '#000' }}
                        />
                        <button className="bg-white text-black px-6 py-3 font-medium transition-colors" style={{ letterSpacing: '1px' }}>
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 border-t" style={{ padding: '3rem 0' }}>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                RABHTA
                            </h3>
                            <p className="text-sm text-gray">
                                Redefining elegance in women's fashion with premium quality and timeless designs.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-medium mb-4">Quick Links</h4>
                            <ul className="text-sm text-gray" style={{ listStyle: 'none' }}>
                                <li className="mb-2"><a href="#" className="transition-colors">About Us</a></li>
                                <li className="mb-2"><a href="#" className="transition-colors">Contact Us</a></li>
                                <li className="mb-2"><a href="#" className="transition-colors">Store Locator</a></li>
                                <li className="mb-2"><a href="#" className="transition-colors">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-4">Customer Care</h4>
                            <ul className="text-sm text-gray" style={{ listStyle: 'none' }}>
                                <li className="mb-2"><a href="#" className="transition-colors">Shipping & Delivery</a></li>
                                <li className="mb-2"><a href="#" className="transition-colors">Returns & Refunds</a></li>
                                <li className="mb-2"><a href="#" className="transition-colors">Size Guide</a></li>
                                <li className="mb-2"><a href="#" className="transition-colors">FAQs</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-4">Policies</h4>
                            <ul className="text-sm text-gray" style={{ listStyle: 'none' }}>
                                <li className="mb-2"><a href="#" className="transition-colors">Privacy Policy</a></li>
                                <li className="mb-2"><a href="#" className="transition-colors">Terms & Conditions</a></li>
                                <li className="mb-2"><a href="#" className="transition-colors">Bulk Orders</a></li>
                                <li className="mb-2"><a href="#" className="transition-colors">Gift Cards</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t pt-8 text-center text-sm text-gray">
                        <p>© 2026 RABHTA. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;