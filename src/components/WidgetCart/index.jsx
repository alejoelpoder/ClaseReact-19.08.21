import "./WidgetCart.css";
import { Link } from "react-router-dom";

const WidgetCart = () => {
    return(
        <div className="widgetCart">
            <Link to={'/Cart'}>
                <img src="https://image.flaticon.com/icons/png/512/3144/3144456.png" alt="widget cart" />
            </Link>
            {/* <a href="#">
                <img src="https://image.flaticon.com/icons/png/512/3144/3144456.png" alt="widget cart" />
            </a> */}
        </div>
    )
}

export default WidgetCart;