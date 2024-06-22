import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Breadcurmbs from "./components/Breadcurmbs";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Breadcurmbs />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        
      </Routes>
      </BrowserRouter>
  );
}

export default App;
