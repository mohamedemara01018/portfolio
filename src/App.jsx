import { useEffect, useState } from 'react'
import Header from './components/1-header/header'
import Hero from './components/2-hero/hero'
import Main from './components/3-main/main'
import Contact from './components/4-contact/contact'
import Footer from './components/4-footer/footer'
function App() {
  const [scroll, setScroll] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>300) {
        setScroll(true)
      }else {
        setScroll(false)
      }
    })
  },[])
  return (
    <div className='container'>
      <Header />
      <div className="divider" />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      {
        scroll && <a href="#up">
          <div className="to-top">
            <i className="fa-solid fa-arrow-up"></i>
          </div>
        </a>
      }

    </div>
  )

}

export default App
