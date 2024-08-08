import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../Utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const fetchMenu = async () => {
    try {
      const url = MENU_URL + resId;
      const response = await fetch(url);
      const data = await response.json();
      console.log("rm-resmenudata", data);
      setResInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, city, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log("rm-itemCards: ", itemCards[0]?.card?.info?.name);
  return (
    <div className="restaurant-menu">
      <h2>
        {name},{city}{" "}
      </h2>
      <h3>cost of Two: {costForTwoMessage}</h3>
      <h3>{cuisines.join(", ")}</h3>

      <div className="menu-list">
        <h2>Menu: </h2>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item?.card?.info?.name}, {item?.card?.info?.price / 100}
          </li>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
