import { useState } from "react";
import "./main.css";
import img1 from '../../assets/facebook.png'
import img2 from '../../assets/fashion.png'
import img3 from '../../assets/skywings.png'
import img4 from '../../assets/pental.png'
import img5 from '../../assets/customwebsite.png'
import img6 from '../../assets/simplewesite.png'
import img7 from '../../assets/simpleportfolio.png'
import img8 from '../../assets/contactus.png'
import img9 from '../../assets/z-index.png'
import img10 from '../../assets/fylo.png'
import img11 from '../../assets/ecommerce.png'
import img12 from '../../assets/headphone.png'

function Main() {
    const [id, setId] = useState(1);

    const my_projects = [
        { title: 'E-Commerce Application ', category: ['react', 'js', 'css'], imgPath: img11, toWebsite: ' https://e-commerce-b1c8d.web.app/', desc: 'Build Responsive E-Commerce Websit Design Using React, Javascript and css' },
        { title: 'Social Media App Development ', category: ['react', 'ts', 'css'], imgPath: img1, toWebsite: ' https://facebook-cb9df.web.app/', desc: 'Build Responsive Social Media App Development Website Design Using React, Typescript' },
        { title: 'headphone website', category: ['html and css', 'js'], imgPath: img12, toWebsite: 'https://mohamedemara01018.github.io/responsive-landing-page-headphones-main/', desc: 'Build Responsive headphone website Using HTML CSS And JavaScript' },
        { title: 'Project with React and Tailwind', category: ['react', 'js', 'tailwind'], imgPath: img10, toWebsite: 'https://fylo-red-omega.vercel.app/', desc: 'Build Responsive Clothing Website Design Using HTML CSS And JavaScript' },
        { title: 'HTML CSS and javascribt project', category: ['html and css', 'js'], imgPath: img2, toWebsite: 'https://mohamedemara01018.github.io/fashion/', desc: 'Build Responsive Clothing Website Design Using HTML CSS And JavaScript' },
        { title: 'HTML CSS and javascribt project', category: ['html and css', 'js'], imgPath: img3, toWebsite: 'https://mohamedemara01018.github.io/skywings/', desc: 'Build A Responsive sky wings Website Using HTML CSS & javascript' },
        { title: 'HTML CSS and javascribt project', category: ['html and css', 'js'], imgPath: img4, toWebsite: 'https://mohamedemara01018.github.io/Premium-Car-Rental/', desc: 'Build A Responsive Premium Car Rental Website Using HTML CSS & javascript' },
        { title: 'HTML CSS and javascribt project', category: ['html and css', 'js'], imgPath: img5, toWebsite: 'https://mohamedemara01018.github.io/customWebsite/', desc: 'Simple Custom Website using HTML & CSS | Website' },
        
    ]
    const [projects, setProjects] = useState(my_projects)
    function filter_project(val) {
        if (val == 'all') {
            setProjects(my_projects)
            return
        }
        const arr = my_projects.filter((project) => {
            const cat = project.category.find((items) => {
                return items === val
            })

            return cat === val
        })
        setProjects(arr)
    }
    const aaa = [
        { id: 1, param: 'all', title: 'All Project', },
        { id: 2, param: 'html and css', title: 'HTML & CSS', },
        { id: 3, param: 'js', title: 'JavaScript', },
        { id: 4, param: 'react', title: 'React', },
        { id: 5, param: 'tailwind', title: 'Tailwind', },
        { id: 6, param: 'ts', title: 'Typescript', },
        // { id: 7, param: 'node and express', title: 'Node & Express', },
    ]
    return (
        <div className="main-section" id='projects'>
            <div className="left-section">

                {
                    aaa.map((item) => {
                        return <button data-active={item.id == id} onClick={() => {
                            setId(item.id);
                            filter_project(item.param);
                        }}>{item.title}</button>
                    })
                }


            </div>
            <div className="right-section">
                {
                    projects.map((project) => {

                        return (<Cards key={project.imgPath} img={project.imgPath} title={project.title} toWebsite={project.toWebsite} desc={project.desc} />)
                    })
                }
            </div>
        </div>
    )
}

export default Main;

function Cards({ img, title, toWebsite, desc }) {
    return (
        <article>
            <a href={toWebsite} target="_blank"  >
                <img src={img} alt="" width={60} />
                <div className="box">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <div className="footer">
                        <div className="left-footer">
                            <i className="fa-solid fa-link"></i>
                            <a href="https://github.com/mohamedemara01018" target="_blank"><i className="fa-brands fa-github"></i></a>
                        </div>
                        <div className="right-footer">
                            <h4>more</h4>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </a>
        </article>
    )
}