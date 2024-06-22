import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {products?.map((el) => (
          <Link
            to={`/products/${el.id}`}
            key={el.id}
            style={{
              backgroundColor: "gray",
              textAlign: "center",
              padding: "10px",
              textDecoration: "none",
              color: "black",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <img src={el.images[0]} alt="images" height={150} width={150} loading="lazy" />
            <h4>{el.title.split(" ").slice(0, 1)}</h4>
            <p>${el.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
