/**
 * Header
 *  -   Logo
 *  -   NavItem
 * Body
 *  -   Search
 *  -   RestorentContainer
 *      -   RestorentCard
 *          -   img
 *          -   name of rest, start rating, cusion
 * Footer
 *  -   CopyRight
 *  -   Links
 *  -   Address
 *  -   Contact
 *
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://cdn.pixabay.com/photo/2015/12/07/16/09/shopping-cart-1080967_640.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = (props) => {
  const { restroData } = props;
  return (
    <div className="restro-card">
      <img className="restro-card-image" src={restroData.image}></img>
      <h3>{restroData.restroName}</h3>
      <h4>{restroData.cusione.join(", ")}</h4>
      <h4>Ratting {restroData.rating}</h4>
      <h4>{restroData.time} min</h4>
    </div>
  );
};

const restroData = [
  {
    id: 1,
    restroName: "Megana Foods",
    image:
      "https://b.zmtcdn.com/data/pictures/7/19168677/f141adefe75f49e49befa49b62139463_o2_featured_v2.jpg?output-format=webp",
    cusione: ["Biryani", "South Indian", "Asian"],
    rating: 4.3,
    time: 30,
  },
  {
    id: 2,
    restroName: "Megana Foods",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/1/50471/6fa39637442e85efb64a5c0db7b31b7f_o2_featured_v2.jpg?output-format=webp",
    cusione: ["Biryani", "South Indian", "Asian"],
    rating: 4.3,
    time: 30,
  },
  {
    id: 3,
    restroName: "Megana Foods",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/1/50691/92d9b4053ef0965120828b4fa4eecc3b_o2_featured_v2.jpg?output-format=webp",
    cusione: ["Biryani", "South Indian", "Asian"],
    rating: 4.3,
    time: 30,
  },
  {
    id: 4,
    restroName: "Megana Foods",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/50574/72d117b9914aee84949e1771b931f21b_o2_featured_v2.jpg?output-format=webp",
    cusione: ["Biryani", "South Indian", "Asian"],
    rating: 4.3,
    time: 30,
  },
];
const AppBody = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {restroData.map((obj) => (
          <RestroCard key={obj.id} restroData={obj}></RestroCard>
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <AppBody></AppBody>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
