import Navbar from "./Navbar";
import ItemListContainer from './ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from './ItemDetailContainer';
import CartView from "./CartView";
import Checkout from "./Checkout";

const Routing = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>

    </BrowserRouter>
  )
}

export default Routing
