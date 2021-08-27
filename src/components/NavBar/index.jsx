
const NavBar = () => {

    const navItems = [
            {
                text: 'Cascos',
                url: '/category/cascos',
            },
            {
                text: 'Trajes',
                url: '/category/trajes',
            },
            {
                text: 'Cohetes',
                url: '/category/cohetes',
            },
            {
                text: 'Motores',
                url: '/category/motores',
            },
            {
                text: 'Ofertas',
                url: '/category/ofertas',
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