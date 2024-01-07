import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Arrived from "./components/Arrived";
import Clients from "./components/Clients";
import Asside from "./components/Asside";
import Offline from "./components/Offline";
import Profile from "./pages/Profile";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

function Home({ cart }) {
  const [items, setItems] = useState([]);
  const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);

  const handleOfflineStatus = () => {
    setOfflineStatus(!navigator.onLine);
  };

  const getData = async () => {
    const res = await fetch("https://bwacharity.fly.dev/items", {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    getData();

    handleOfflineStatus();
    window.addEventListener("online", handleOfflineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOfflineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, [offlineStatus]);

  return (
    <Layout mode={"light"} cart={cart}>
      {offlineStatus && <Offline />}
      <Hero />
      <Rooms />
      <Arrived items={items} />
      <Clients />
      <Asside />
    </Layout>
  );
}

export default function App() {
  const cachedCart = window.localStorage.getItem("cart");
  const [cart, setCart] = useState([]);
  const handleAddToCart = (item) => {
    const currentIndex = cart.length;
    const newCart = [...cart, { id: currentIndex + 1, item }];
    setCart(newCart);
    window.localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleRemoveCartItem = (e, id) => {
    e.preventDefault();
    const revisedCartItem = cart.filter((item) => item.id !== id);
    setCart(revisedCartItem);
    window.localStorage.setItem("cart", JSON.stringify(revisedCartItem));
  };

  useEffect(() => {
    if (cachedCart !== null) {
      setCart(JSON.parse(cachedCart));
    }
  }, [cachedCart]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home cart={cart} />} />
        <Route path="/profile" element={<Profile cart={cart} />} />
        <Route
          path="/details/:id"
          element={<Details handleAddToCart={handleAddToCart} cart={cart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} handleRemoveCartItem={handleRemoveCartItem} />
          }
        />
      </Routes>
    </Router>
  );
}
