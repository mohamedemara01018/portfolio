import Lottie from 'lottie-react';
import './hero.css'
import hero from '../../assets/hero.json'
import image from '../../assets/mypicture.png'
function Hero() {
    return (
        <>
            <section>
                <div className="left-section">
                    <div className="image">
                        <div className="parent-avatar">
                            <img src={image} alt="" className="avatar" />
                        </div>
                        <i className="fa-solid fa-check"></i>
                    </div>
                    <h1 className='title'>Front End Developer</h1>
                    <p className='subTitle' id='about'>I developed modern, powerful, fast, user-friendly, and reactive web applications with React.js. I
                        have excellent experience in React.js, JavaScript, Typescript, HTML, and CSS.
                    </p>
                    <div className="icons">
                        <a href='https://x.com/MarhMhmd10351' target='_blank'><i className="fa-brands fa-twitter"></i></a>
                        <a href='https://www.instagram.com/emara451/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                        <a href='https://github.com/mohamedemara01018' target='_blank'><i className="fa-brands fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/mohamed-gamal-032aa8284/' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="right-section">
                    <Lottie className='animation' animationData={hero} />
                </div>
            </section>
        </>
    )
}

export default Hero;