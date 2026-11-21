
import "./Veg.css";

function Veg() {

  const dishes = [
    {
      name: "Paneer Tikka",
      price: "₹220",
      description: "Smoky grilled paneer with delicious spices.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8"
    },
    {
      name: "Veg Biryani",
      price: "₹180",
      description: "Aromatic rice cooked with fresh vegetables.",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
    },
    {
      name: "Masala Dosa",
      price: "₹100",
      description: "Crispy dosa filled with traditional potato masala.",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
    },
    {
      name: "Veg Thali",
      price: "₹250",
      description: "A complete meal with traditional Indian flavours.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d"
    }
  ];

  return (
    <div className="veg-page">

      <div className="menu-heading">
        <p>FRESH & DELICIOUS</p>
        <h1>Vegetarian <span>Delights</span></h1>
        <p>Explore our delicious collection of vegetarian dishes.</p>
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

export default Veg;
