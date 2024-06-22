import React, { useEffect, useState } from "react";
import Stopwatch from "./Stopwatch";
import Model from "./Model";
import TextField from "./TextField";
import { Link } from "react-router-dom";

const Home = () => {
  const [showModel, setShowModel] = useState(false);

  const closeModel = () => setShowModel(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products.slice(0, 6)));
  }, []);

  return (
    <div>
      <div>
        <div style={{
            display: "flex",
            gap: 4,
            textAlign: "center",
            justifyContent: "center",
          alignItems: "center",
          fontSize: '2rem',
            
          }}>Home page</div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            textAlign: "center",
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
                textDecoration: "none",
                color: "black",
                padding: '20px',
                borderRadius:'8px'
              }}
            >
              <img src={el.images[0]} alt="images" width={150} height={150} />
              <h4>{el.title.split(" ").slice(0, 1)}</h4>
            </Link>
          ))}
        </div>

        <Link
          to={"/products"}
          style={{
            display: "flex",
            width:'150px',
            justifyContent: "center",
            textDecoration: "none",
            alignItems: "center",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              padding: "5px 10px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            See more products
          </button>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "center",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "7px",
          }}
          onClick={() => setShowModel(true)}
        >
          Show Model
        </button>
      </div>
      <div>{showModel && <Model closeModel={closeModel} />}</div>
      <br />
      <br />
      <Stopwatch />
      <TextField />
    </div>
  );
};

export default Home;
