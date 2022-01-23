import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Basket from "./Basket";
import CardDetails from "./CardDetails";

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/card/:id" element={<CardDetails />} />
    </Routes>
  );
}
