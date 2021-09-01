import "./Header.css";
import NavBar from "../NavBar";
import WidgetCart from "../WidgetCart";

const Header = () => {
    return(
        <header>
            <h1>Life on Mars</h1>
            <NavBar />
            <WidgetCart />
        </header>
    )
}

export default Header;