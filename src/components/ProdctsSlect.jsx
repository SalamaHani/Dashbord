import React from "react";
import { formatPrice } from "../Util";
function ProdctsSlect({ item }) {
  const { product, quantity, price } = item;
  return (
    <>
      <div className="card dark:bg-gray-800 card-side bg-base-100 w-56 h-30  dark:text-gray-400 shadow-xl">
        <figure>
          <img
            className="h-30 w-30 object-cover rounded-t-lg  md:rounded-none md:rounded-s-lg "
            src={product.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-3">
          <span className="card-title">Quantity Products:{quantity}</span>
          <p>Price:{formatPrice(price)}</p>
        </div>
      </div>
    </>
  );
}

export default ProdctsSlect;
