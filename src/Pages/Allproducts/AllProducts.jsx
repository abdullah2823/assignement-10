import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from '../../Component/ProductCard';

export default function AllProducts() {
  const data = useLoaderData() || []; // default empty array
  console.log(data);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="flex justify-center text-3xl md:text-4xl font-bold py-5">All Products</h1>

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6 
          justify-items-center
        "
      >
        {data.map((cards, index) => (
          <ProductCard key={index} cards={cards} />
        ))}
      </div>
    </div>
  );
}
