import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                
            </ul>
            <div>
                <i className="fa-regular fa-copyright"></i>
                <p>2024 Spencer Sharp. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;