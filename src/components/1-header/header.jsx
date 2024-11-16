import { useEffect, useState } from 'react'
import './header.css'
function Header() {
    const [showModel, setShowmodel] = useState(false)
    const [dark, setDark] = useState(false);
    const [switchMOde, setSwitchmode]=useState('dark')
    useEffect(()=>{
        if(switchMOde=='light') {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }else if(switchMOde=='dark'){
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        }
    },[switchMOde])
    let className = 'd-none';
    if (showModel) {
        className = 'd-block'
    } else {
        className = 'd-none'
    }
    return (
        <header id='up'>
            {!showModel && <div className='icon show-model' onClick={() => setShowmodel(true)}>
            <i className="fa-solid fa-bars " ></i>
            </div>}

            
            <div />
            <nav>
                <ul >
                    <li><a href="#about">about</a></li>
                    <li><a href="#article">articles</a></li>
                    <li><a href="#projects">projects</a></li>
                    {/* <li><a href="">speaking</a></li> */}
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
        <div className='icon ' onClick={() => (setDark(!dark),(switchMOde=='light')?setSwitchmode('dark'):setSwitchmode('light'))}>

                {
                    dark ? <i className="fa-regular fa-moon" ></i> : <i className="fa-regular fa-lightbulb" ></i>
                }
            </div>


            {showModel && <div className="container-model">
                <div className="model">
                    <div className="close-icon" onClick={() => setShowmodel(false)}>
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <ul>
                        <li onClick={()=>setShowmodel(false)}><a href="#about">about</a></li>
                        <div className='divider' />
                        <li onClick={()=>setShowmodel(false)}><a href="#article">articles</a></li>
                        <div className='divider' />

                        <li onClick={()=>setShowmodel(false)}><a href="projects">project</a></li>
                        <div className='divider' />

                        {/* <li onClick={()=>setShowmodel(false)}><a href="">speaking</a></li>
                        <div className='divider' /> */}

                        <li onClick={()=>setShowmodel(false)}><a href="#contact">contact</a></li>
                    </ul>
                </div>
            </div>}
        </header>
    )
}

export default Header