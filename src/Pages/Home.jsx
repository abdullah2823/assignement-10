import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ProductCard from '../Component/ProductCard';
import { ArrowRight } from 'lucide-react';
import Banner from '../Component/Banner';

export default function Home() {
  const data = useLoaderData();
  const updateProduct = data.slice(0, 6);

  return (
    <div className="w-11/12 mx-auto py-5">
      {/* 🖼️ Banner Section */}
      <Banner />

      {/* 🏷️ Title */}
      <div>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold py-6">
          Updated Products
        </h1>
      </div>

      {/* 🛍️ Product Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-6 
          justify-items-center
        "
      >
        {updateProduct.map((cards, index) => (
          <ProductCard key={index} cards={cards} />
        ))}
      </div>

      {/* 🔘 See All Button */}
      <div className="flex justify-center md:justify-end mt-8">
        <Link to="/allproduct">
          <button className="btn flex items-center gap-2 py-2 px-5 rounded-xl bg-primary text-white text-lg md:text-xl font-medium transition-all duration-300 hover:bg-blue-600 hover:scale-105">
            See All Products <ArrowRight size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
}
