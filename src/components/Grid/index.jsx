import './CategoriesGrid.css';
import {Link} from 'react-router-dom'

const CategoriesGrid = () => {
    return (
        <section className="categories_grid">
            <div className="container">
                <div className="item">
                    <Link to="">
                        Espadas  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Mapas  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Anillos  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Artilugios  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Comida  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Ofertas  
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CategoriesGrid;