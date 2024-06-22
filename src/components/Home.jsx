import React, { useState } from "react";
import Stopwatch from "./Stopwatch";
import Model from "./Model";
import TextField from "./TextField";

const Home = () => {
  const [showModel, setShowModel] = useState(false);

  const closeModel =()=>setShowModel(false)
  return (
    <div>
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
