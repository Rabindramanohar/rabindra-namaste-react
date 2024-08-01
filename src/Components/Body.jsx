import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredRestaurants, setFilterRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const handleFilter = () => {
    const filteredRes = resList.filter((item, idx) => item.info.avgRating >= 4);
    setFilterRestaurants(filteredRes);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleFilterSearch = () => {
    const searchData = resList.filter((item, idx) =>
      item?.info?.name.toLowerCase().includes(searchValue)
    );
    setFilterRestaurants(searchData);
  };
  const fetchData = async () => {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.34260&lng=85.30990&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("response status: " + response.status);
      }

      const json = await response.json();
      const data =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log("rm-data: ", data);
      setResList(data);
      setFilterRestaurants(data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="search-container">
        <input type="text" value={searchValue} onChange={handleSearch} />
        <button className="search-btn" onClick={handleFilterSearch}>
          Search
        </button>
        <button onClick={handleFilter} className="filter-btn">
          Filter top restaurants
        </button>
      </div>
      <div className="res-container">
        {resList?.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((item) => {
            const resObj = item.info;
            return <RestaurantCard key={resObj.id} data={resObj} />;
          })
        )}
      </div>
    </>
  );
};

export default Body;
