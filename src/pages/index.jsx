import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Basket from "./Basket";
import CardDetails from "./CardDetails";

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/5" element={<Basket />} />
      <Route path="/7" element={<CardDetails />} />
    </Routes>
  );
}
