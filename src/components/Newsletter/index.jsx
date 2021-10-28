import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <h2>¡Suscríbete!</h2>
                <p>Déjanos tu email y recibe las mejores ofertas</p>

                <form>
                    <input type="text" placeholder="email" />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </section>
    )
}

export default Newsletter;
