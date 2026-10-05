import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>Review your selected plants</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some beautiful plants to your cart!</p>

          <button
            className="continue-shopping-btn"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h2>{item.name}</h2>

                  <p className="unit-price">
                    Unit Price: ₹{item.price}
                  </p>

                  <div className="quantity-section">
                    <button
                      className="quantity-btn"
                      onClick={() => handleDecrease(item)}
                    >
                      −
                    </button>

                    <span className="quantity">
                      {item.quantity}
                    </span>

                    <button
                      className="quantity-btn"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                  </div>

                  <p className="item-total">
                    Total: ₹{item.price * item.quantity}
                  </p>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Cart Summary</h2>

            <p className="grand-total">
              Total Amount: ₹{totalAmount}
            </p>

            <div className="cart-actions">
              <button
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              <button
                className="continue-shopping-btn"
                onClick={onContinueShopping}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;