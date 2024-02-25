import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import Product from "./components/Product";
import Hero from "./components/Hero";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
