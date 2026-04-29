import React from "react";

const PopularProducts = () => {
  return (
    <div>
      <div className="space-y-2.5 text-center p-3">
        <h1 className="text-4xl  font-bold">
          Popular{" "}
          <span className=" bg-linear-to-r from-orange-500 to-pink-500  text-transparent bg-clip-text font-bold">
            Products
          </span>
        </h1>
        <p className="text-gray-600">
          Discover our most-loved summer essentials, handpicked for you
        </p>
      </div>
    </div>
  );
};

export default PopularProducts;
