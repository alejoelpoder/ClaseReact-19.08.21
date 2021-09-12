import "./Header.css";
import NavBar from "../NavBar";
import WidgetCart from "../WidgetCart";

const Header = () => {
    return(
        <header>
            <a href="../../"><h1>Life on Mars</h1></a>
            <NavBar />
            <WidgetCart />
        </header>
    )
}

export default Header;