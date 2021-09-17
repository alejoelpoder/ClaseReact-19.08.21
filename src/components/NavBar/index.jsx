import "./NavBar.css"

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
                                <a href={item.url} rel="noreferrer">{item.text}</a>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavBar;