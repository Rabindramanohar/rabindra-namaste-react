import React  from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));

const styleResName = {
    fontSize: "20px",
    color: "#948787",
    fontWeight: "bold"
}

const AppLayout = () => {
    return (
        <>
        <Header />
        <Body />
        </>
    )
}

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png" alt="food-logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>contact us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}

const Search = () => {
    return (
        <div className="search-container">Search</div>
    )
}

const Body = () => {
    return (
        <>
            <Search />
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </>
    )
}

const RestaurantCard = () => {
    return (
        <div className="resCard-container">
            <img className="resCard-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/do5kw8vcyuxndsmywali" alt="res-food" />
            <div style={styleResName} className="res-name">Vegan Food</div>
            <h4>North Indian, Vegan food</h4>
            <h5>4.5 rating</h5>
        </div>
    )
}

root.render(<AppLayout />);