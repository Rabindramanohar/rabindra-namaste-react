import { useState } from "react";
import { resObj } from "../Utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [resList, setResList] = useState(resObj);
  const handleFilter = () => {
    const filteredRes = resList.filter((item, idx) => item.info.avgRating >= 4);
    setResList(filteredRes);
  };
  return (
    <>
      <button style={{ textAlign: "center" }} onClick={handleFilter}>
        filter
      </button>
      <div className="res-container">
        {resList.map((item) => {
          const resObj = item.info;
          return <RestaurantCard key={resObj.id} data={resObj} />;
        })}
      </div>
    </>
  );
};

export default Body;
