import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./CartSlice";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

import "./App.css";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

function AppContent() {
  const [page, setPage] = useState("home");

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const goToPlants = () => {
    setPage("plants");
  };

  const goToHome = () => {
    setPage("home");
  };

  const goToCart = () => {
    setPage("cart");
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div
          className="logo"
          onClick={goToHome}
        >
          🌿 Paradise Nursery
        </div>

        <div className="nav-links">
          <button onClick={goToHome}>
            Home
          </button>

          <button onClick={goToPlants}>
            Plants
          </button>

          <button
            className="cart-nav-btn"
            onClick={goToCart}
          >
            🛒 Cart
            <span className="cart-count">
              {cartCount}
            </span>
          </button>
        </div>
      </nav>

      {/* HOME PAGE */}
      {page === "home" && (
        <>
          <section className="landing-page">
            <div className="landing-overlay">
              <div className="landing-content">
                <h1>Paradise Nursery</h1>

                <h2>
                  Bring Nature Into Your Home
                </h2>

                <p>
                  Discover beautiful plants that make
                  your home fresh, peaceful and lively.
                </p>

                <button
                  className="get-started-btn"
                  onClick={goToPlants}
                >
                  Get Started
                </button>
              </div>
            </div>
          </section>

          <AboutUs />
        </>
      )}

      {/* PLANTS PAGE */}
      {page === "plants" && (
        <ProductList />
      )}

      {/* CART PAGE */}
      {page === "cart" && (
        <CartItem
          onContinueShopping={goToPlants}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;