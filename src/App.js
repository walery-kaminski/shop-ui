import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div data-testid="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products/:productSlug" element={<Home />} />
        <Route path="search/:searchTerm" element={<Home />} />
        <Route path="*" element={<>404</>} />
      </Routes>
      <Footer />
    </div>
  );
}
