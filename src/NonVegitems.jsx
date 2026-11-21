
import "./NonVeg.css";

function NonVeg() {

  const dishes = [
    {
      name: "Chicken Biryani",
      price: "₹250",
      description: "Traditional dum biryani with aromatic spices.",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c"
    },
    {
      name: "Tandoori Chicken",
      price: "₹320",
      description: "Juicy chicken roasted with authentic spices.",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0"
    },
    {
      name: "Chicken Curry",
      price: "₹220",
      description: "Rich and flavourful chicken curry.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
    },
    {
      name: "Fish Fry",
      price: "₹200",
      description: "Crispy fried fish with a spicy coating.",
      image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9"
    }
  ];

  return (
    <div className="nonveg-page">

      <div className="menu-heading">
        <p>RICH & FLAVOURFUL</p>

        <h1>Non-Veg <span>Specials</span></h1>

        <p>Discover delicious dishes prepared with authentic flavours.</p>
      </div>

      <div className="food-grid">

        {dishes.map((dish, index) => (
          <div className="food-card" key={index}>

            <img src={dish.image} alt={dish.name} />

            <div className="food-info">

              <h2>{dish.name}</h2>

              <p>{dish.description}</p>

              <div className="food-bottom">

                <h3>{dish.price}</h3>

                <button>Order Now</button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default NonVeg;
