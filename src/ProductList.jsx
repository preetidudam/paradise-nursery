import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 499,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 599,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Monstera",
    price: 799,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594576108-4a1f6e2e7b9c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 549,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1632207691142-cc9086eec857?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Areca Palm",
    price: 699,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 649,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 7,
    name: "Aloe Vera",
    price: 299,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Echeveria",
    price: 249,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Haworthia",
    price: 279,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8b7a6b1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Jade Plant",
    price: 349,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "String of Pearls",
    price: 399,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "Zebra Haworthia",
    price: 299,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 13,
    name: "Spider Plant",
    price: 399,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Boston Fern",
    price: 449,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    name: "Dracaena",
    price: 599,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    name: "English Ivy",
    price: 499,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1597055181300-d4c6c6f2c3e0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 17,
    name: "Bamboo Palm",
    price: 649,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1601988223095-2b3e9f3f5e4f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 18,
    name: "Calathea",
    price: 699,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1597055181449-8d5f8e4d5e8f?auto=format&fit=crop&w=600&q=80",
  },
];

const categories = [
  "Indoor Plants",
  "Succulents",
  "Air Purifying Plants",
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="products-page">
      <div className="products-heading">
        <h1>Our Plants</h1>
        <p>
          Choose from our beautiful collection of
          houseplants.
        </p>
      </div>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section
            className="category-section"
            key={category}
          >
            <h2 className="category-title">
              {category}
            </h2>

            <div className="product-grid">
              {categoryPlants.map((plant) => (
                <div
                  className="product-card"
                  key={plant.id}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="product-image"
                  />

                  <h3>{plant.name}</h3>

                  <p className="product-price">
                    ₹{plant.price}
                  </p>

                  <button
                    className="add-cart-btn"
                    disabled={isInCart(plant.id)}
                    onClick={() =>
                      handleAddToCart(plant)
                    }
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProductList;