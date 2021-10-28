import "./Header.css";
import NavBar from "../NavBar";
import WidgetCart from "../WidgetCart";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <Link exact to='/'>
                <a href="../../"><h1>⚔️TESOROS DE LOS DIAS ANTIGUOS⚔️</h1></a>
            </Link>
            <NavBar />
            <WidgetCart />
        </header>
    )
}

export default Header;