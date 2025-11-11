import React, { useState, useEffect } from 'react';

export default function MyExports() {
  const [exportedProducts, setExportedProducts] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('Exported')) || [];
    setExportedProducts(savedList);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-10">
          🌍 My Exported Products
        </h1>

        {exportedProducts.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            You haven't exported any products yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {exportedProducts.map((item) => (
              <div
                key={item.id}
                className="card bg-white shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 rounded-lg w-full sm:w-72"
              >
                <figure>
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="h-52 w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-lg font-semibold">{item.productName}</h2>
                  <p className="text-gray-600 text-sm">
                    {item.description
                      ? item.description.length > 80
                        ? item.description.slice(0, 80) + '...'
                        : item.description
                      : 'No description available.'}
                  </p>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="font-bold text-blue-600">${item.price}</span>
                    <span className="badge badge-outline">{item.originCountry}</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">
                    ⭐ {item.rating} | Available: {item.availableQuantity}
                  </p>
                  <div className="card-actions justify-end mt-3">
                    <button
                      className="btn btn-sm bg-gray-400 text-gray-700 cursor-not-allowed"
                      disabled
                    >
                      Exported
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
