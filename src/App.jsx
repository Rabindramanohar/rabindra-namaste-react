import React  from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";

const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));




const AppLayout = () => {
    return (
        <>
        <Header />
        <Body />
        </>
    )
}





root.render(<AppLayout />);