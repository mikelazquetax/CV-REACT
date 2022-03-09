import './Hero.scss';
import Img1 from "../../assets/Img1.png"

function Hero({ hero }){
    return(
<section className='Hero'>
    <div className='Hero__info'>
        <h1>{hero.name}</h1>
        <h2>{hero.profession}</h2>
        <ul>
            <li>
                <span className='Hero__icon'>📴</span>
                <a href={`tel:${hero.mobile}`} className="Hero__link">{hero.mobile}</a>
            </li>
            <li>
                <span className='Hero__icon'>✉</span>
                <a href={`mailto:${hero.email}`} className="Hero__link">{hero.email}</a>
            </li>
        </ul>
    </div>
    <div>
        <img src={Img1} alt='Dev' width='200px'/>
    </div>
</section>
    )
}

export default Hero