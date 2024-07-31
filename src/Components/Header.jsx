import { LOGO_URL } from "../Utils/constant";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="food-logo" />
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

export default Header;