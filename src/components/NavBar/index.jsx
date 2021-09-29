import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {

    const navItems = [
            {
                text: 'Cascos',
                url: '/categoria/cascos',
            },
            {
                text: 'Trajes',
                url: '/categoria/trajes',
            },
            {
                text: 'Cohetes',
                url: '/categoria/cohetes',
            },
            {
                text: 'Motores',
                url: '/categoria/motores',
            },
            {
                text: 'Ofertas',
                url: '/categoria/ofertas',
            },
    ]

    return(
        <>
            <nav>
                <ul>
                    {
                        navItems &&
                        navItems.map((item, i) => 
                            <li key={i}>
                                <Link to={item.url}>
                                    {item.text}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavBar;