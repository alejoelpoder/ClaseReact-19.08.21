import "./NavBar.css"
import { Link } from "react-router-dom"
import { getFirestore } from "../../services/getFirebase";
import { useEffect, useState } from "react";

const NavBar = () => {

    const [navItems, setNavItems] = useState([])

    useEffect(() => {
        const dbQuery = getFirestore()
        const traer = dbQuery.collection('categories')

        traer.get().then(({docs}) => {
            setNavItems(docs.map(categoria => ({id: categoria.id, ...categoria.data()})))
        })

    }, [])

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