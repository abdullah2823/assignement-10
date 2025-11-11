import { CopyPlus } from "lucide-react";
import React from "react";

export default function AddProduct() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      productName: e.target.productName.value,
      originCountry: e.target.originCountry.value,
      price: Number(e.target.price.value),
      rating: Number(e.target.rating.value),
      availableQuantity: Number(e.target.availableQuantity.value),
      productImage: e.target.productImage.value,
      importDate: new Date(),
      description: e.target.description.value,
    };

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Product added:", data);
        e.target.reset(); // form reset
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="flex justify-center items-center gap-4 text-3xl md:text-4xl font-bold text-blue-600 mb-8">
          <CopyPlus /> Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label>Product Name</label>
            <input type="text" name="productName" required placeholder="Enter product name" className="input input-bordered w-full" />
          </div>

          <div>
            <label>Origin Country</label>
            <input type="text" name="originCountry" required placeholder="Enter country" className="input input-bordered w-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label>Price ($)</label>
              <input type="number" name="price" required placeholder="Enter price" className="input input-bordered w-full" />
            </div>
            <div>
              <label>Rating (1-5)</label>
              <input type="number" name="rating" min="1" max="5" required placeholder="Enter rating" className="input input-bordered w-full" />
            </div>
          </div>

          <div>
            <label>Available Quantity</label>
            <input type="number" name="availableQuantity" required placeholder="Enter quantity" className="input input-bordered w-full" />
          </div>

          <div>
            <label>Product Image URL</label>
            <input type="text" name="productImage" required placeholder="Enter image URL" className="input input-bordered w-full" />
          </div>

          <div>
            <label>Description</label>
            <textarea name="description" required rows="4" placeholder="Enter description" className="textarea textarea-bordered w-full"></textarea>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="btn bg-blue-600 text-white w-full sm:w-1/2">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}
