import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider'; // adjust path if needed

export default function ProductCard({ cards }) {
  const { productName, originCountry, price, rating, availableQuantity, productImage, id } = cards;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [exported, setExported] = useState(false);
  const [imported, setImported] = useState(false);

  useEffect(() => {
    const exportList = JSON.parse(localStorage.getItem('Exported')) || [];
    if (exportList.find((p) => p.id === id)) setExported(true);

    const importList = JSON.parse(localStorage.getItem('Imported')) || [];
    if (importList.find((p) => p.id === id)) setImported(true);
  }, [id]);

  const handleExport = () => {
    const exportList = JSON.parse(localStorage.getItem('Exported')) || [];
    if (exported) return alert('Already Exported');
    exportList.push(cards);
    localStorage.setItem('Exported', JSON.stringify(exportList));
    setExported(true);
  };

  const handleImport = () => {
    const importList = JSON.parse(localStorage.getItem('Imported')) || [];
    if (imported) return alert('Already Imported');
    importList.push(cards);
    localStorage.setItem('Imported', JSON.stringify(importList));
    setImported(true);
  };

  const handleSeeDetails = () => {
    if (user) {
      navigate(`/productdetails/${id}`);
    } else {
      alert('Please login first to see product details!');
      navigate('/auth/login');
    }
  };

  return (
    <div className="p-4 w-full mx-auto sm:w-80 md:w-72 lg:w-80">
      <div className="card bg-base-100 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out rounded-lg">
        <figure className="w-full">
          <img
            src={productImage}
            alt={productName}
            className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-bold">{productName}</h2>
          <p className="text-gray-600">Price: ${Number(price).toFixed(2)}</p>
          <p className="text-gray-600">Origin: {originCountry}</p>
          <p className="text-gray-600">Rating: {rating ?? 0} ⭐</p>
          <p className="text-gray-600">Available: {availableQuantity ?? 0}</p>
          <div className="card-actions justify-around mt-2">
            <button
              onClick={handleImport}
              className={`btn btn-primary btn-sm ${
                imported ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'hover:bg-white hover:text-black'
              }`}
              disabled={imported}
            >
              {imported ? 'Imported' : 'Import'}
            </button>

            <button
              onClick={handleExport}
              className={`btn btn-primary btn-sm ${
                exported ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'hover:bg-white hover:text-black'
              }`}
              disabled={exported}
            >
              {exported ? 'Exported' : 'Export'}
            </button>

            <button
              onClick={handleSeeDetails}
              className="btn btn-secondary btn-sm hover:bg-white hover:text-black"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
