import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Basket from "./Basket";
import Product from "./Product";

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/card/:id" element={<Product />} />
    </Routes>
  );
}
