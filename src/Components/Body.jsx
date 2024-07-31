import Search from "./Search"
import { resObj } from "../Utils/mockData"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
    return (
        <>
            <Search />
            <div className="res-container">
                {resObj.map(item => {
                    const resObj = item.info
                    return <RestaurantCard key={resObj.id} data={resObj} />
                })}
                
            </div>
        </>
    )
}

export default Body