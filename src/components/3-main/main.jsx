import { useState } from "react";
import "./main.css";
function Main() {
    const [id, setId] = useState(1);

    const my_projects = [
        { title: 'Social Media App Development ', category: ['react', 'ts'], imgPath: '../public/facebook.png', toWebsite: 'https://facebook-cb9df.web.app/', desc: 'Build Responsive Social Media App Development Website Design Using React, Typescript' },
        { title: 'HTML CSS and javascribt project', category: ['html and css', 'js'], imgPath: '../public/fashion.png', toWebsite: 'https://mohamedemara01018.github.io/fashion/', desc: 'Build Responsive Clothing Website Design Using HTML CSS And JavaScript' },
        { title: 'HTML CSS and javascribt project', category: ['html and css', 'js'], imgPath: '../public/skywings.png', toWebsite: 'https://mohamedemara01018.github.io/skywings/', desc: 'Build A Responsive sky wings Website Using HTML CSS & javascript' },
        { title: 'HTML CSS and javascribt project', category: ['html and css', 'js'], imgPath: '../public/pental.png', toWebsite: 'https://mohamedemara01018.github.io/Premium-Car-Rental/', desc: 'Build A Responsive Premium Car Rental Website Using HTML CSS & javascript' },
        { title: 'HTML CSS and javascribt project', category: ['html and css', 'js'], imgPath: '../public/customwebsite.png', toWebsite: 'https://mohamedemara01018.github.io/customWebsite/', desc: 'Simple Custom Website using HTML & CSS | Website' },
        { title: 'HTML & CSS project', category: ['html and css'], imgPath: '../public/simplewesite.png', toWebsite: 'https://mohamedemara01018.github.io/simpleProfile/', desc: 'Simple Website Design using HTML & CSS | Simple Design Page' },
        { title: 'HTML & CSS project', category: ['html and css'], imgPath: '../public/simpleportfolio.png', toWebsite: 'https://mohamedemara01018.github.io/simpleProfile/', desc: 'Simple Portfolio Website using HTML & CSS | Website With Typing Text Animation' },
        { title: 'HTML & CSS project', category: ['html and css'], imgPath: '../public/contactus.png', toWebsite: 'https://mohamedemara01018.github.io/contactUs/', desc: 'Ressponsive Contact Us Form In HTML And CSS | Contact Us Page' },
        { title: 'HTML & CSS project', category: ['html and css'], imgPath: '../public/z-index.png', toWebsite: 'https://mohamedemara01018.github.io/z-index/', desc: 'Image Hover Animation using HTML & CSS | Z-Index Transition' },
        { title: 'React project', category: ['react'], imgPath: '../public/react1.jpg', toWebsite: '#', desc: 'mohamed gamal oshour' },
        { title: 'React project', category: ['react'], imgPath: '../public/react2.jpg', toWebsite: '#', desc: 'mohamed gamal oshour' },
        { title: 'React project', category: ['react'], imgPath: '../public/react3.webp', toWebsite: '#', desc: 'mohamed gamal oshour' },
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
        { id: 5, param: 'ts', title: 'Typescript', },
        { id: 6, param: 'node and express', title: 'Node & Express', },
    ]
    return (
        <div className="main-section" id='articles-and-projects'>
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