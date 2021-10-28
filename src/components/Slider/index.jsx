import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="slider">
            <Slider {...settings}>
                <div>
                    <img src="https://i.ibb.co/02xz19f/Sin-t-tulo-1920-x-300-px.png" alt="Slide 1" className="slider_img" />
                </div>
                <div>
                    <img src="https://i.ibb.co/Mnr4P10/Sin-t-tulo-1920-x-300-px.png" alt="Slide 1" className="slider_img" />
                </div>
                <div>
                    <img src="https://i.ibb.co/HKPJJzQ/Sin-t-tulo-1920-x-300-px.png" alt="Slide 1" className="slider_img" />
                </div>
            </Slider>
        </section>
    )
}

export default HomeSlider; 