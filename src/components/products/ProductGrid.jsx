import React from "react";
import ProductCard from "./ProductCard";

// Example usage: <ProductGrid products={products} onAddToCart={fn} />
export default function ProductGrid({ products = [], onAddToCart }) {
   if (products.length === 0) {
    return (
      <div className="w-full py-8 px-2 md:px-0">
        <p className="text-center text-gray-600">No products found.</p>
      </div>
    );
  }

  
  return (
    <div className="w-full py-8 px-2 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description || product.location}
            price={product.price}
            buttonText="Add to Cart"
            onAddToCart={() => onAddToCart && onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}
