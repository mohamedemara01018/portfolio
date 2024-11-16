import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#articles-and-projects">Projects</a></li>
                <li><a href="">Speaking</a></li>
                <li><a href="">Uses</a></li>
            </ul>
            <div>
                <i className="fa-regular fa-copyright"></i>
                <p>2024 Spencer Sharp. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;