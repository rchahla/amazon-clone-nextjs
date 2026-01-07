import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

function Product({ id, title, price, description, category, image, rate }) {
  const rating = Math.round(rate);

  return (
    <div>
      <p>{category}</p>

      <Image src={image} alt="" width={200} height={200} objectFit="contain" />
      <h4>{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" key={i} />
          ))}
      </div>
    </div>
  );
}

export default Product;
