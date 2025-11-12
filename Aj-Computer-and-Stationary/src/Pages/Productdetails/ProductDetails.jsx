import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";

export default function ProductDetails() {
  const allData = useLoaderData(); // assume array of products
  const { id } = useParams();

  const product = allData.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <Navbar />
        <h2 className="text-center text-xl mt-20">Product not found</h2>
        <Footer />
      </div>
    );
  }

  const {productName,originCountry,price,rating,availableQuantity,productImage,importDate,description,} = product;

  return (
    <div className="bg-gray-100 min-h-screen gap-10">
      <Navbar />

      <div className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={productImage}
              alt={productName}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{productName}</h2>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Price:</span>{" "}
                <span className="text-blue-600 text-lg">${Number(price).toFixed(2)}</span>
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Origin:</span> {originCountry}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Rating:</span> {rating} ⭐
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Available Quantity:</span> {availableQuantity}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Import Date:</span>{" "}
                {new Date(importDate).toLocaleDateString()}
              </p>

              {/* Description Section */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Product Description</h3>
                <p className="text-gray-700 mb-4">{description}</p>
              </div>

              {/* Additional Details */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Details</h3>
                <ul className="text-gray-700 list-disc list-inside">
                  <li><span className="font-semibold">Weight:</span> 1 kg</li>
                  <li><span className="font-semibold">Dimensions:</span> 10 x 5 x 3 in</li>
                  <li><span className="font-semibold">Material:</span> High-quality steel</li>
                  <li><span className="font-semibold">Warranty:</span> 6 months</li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
              <Link to="/allproduct">
                <button className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
