import type { HeaderProps } from '../../interface';
import { AutoTypeCareer, ButtonComp } from '../extras';
import './experience.css';

const Experience_Comp:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {
    

    return(

        <>
            <div className="experiencediv">
                <h1 className={`h1text ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}><AutoTypeCareer /></h1>
                <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>The path, milestones, and impact of my work.</p>
                <div className="experienceparent">
                    <div className={`vertical_line ${darkMode ? 'background_primary_red' : 'background_primary_black'}`}>
                    </div>
                    <div className={`timeline_star ${darkMode ? 'darkmoderound' : 'lightmoderound'}`}>
                        <i className={`fa-solid fa-book-open iconfont`}></i>
                    </div>
                     <div className={`firstexperiencediv ${darkMode ? 'darkmodeaboutcard darkmodetext' : 'lightmodeaboutcard lightmodetext'}`}>
                        <h1 className='h1smalltext'>MASTER OF INFORMATION TECHNOLOGY</h1>
                        <div className="yearofexp">
                            <p className='ptext'>Royal Melbourne Institute of Technology, RMIT</p>
                            <p className='ptext'>Currently Pursuing</p>
                        </div>
                        <p className='ptext panywhere'>Master of Information Technology focusing on software development, data management, and systems design. Covering algorithms, databases, networking, security, cloud, and project management, with hands-on work in modern web stacks. Built capstone projects emphasizing clean architecture, testing, and real-world problem solving.</p>
                    </div>
                    <div className={`timeline_star2 ${darkMode ? 'darkmoderound' : 'lightmoderound'}`}>
                        <i className="fa-solid fa-star iconfont"></i>
                    </div>
                    <div className={`secondexperiencediv ${darkMode ? 'darkmodeaboutcard darkmodetext' : 'lightmodeaboutcard lightmodetext'}`}>
                        <h1 className='h1smalltext'>FULL STACK DEVELOPER</h1>
                        <p className='ptext'>FreeLancer</p>
                        <p className='ptext panywhere'>Freelance full-stack developer delivering end-to-end web apps for small businesses. I ship responsive, accessible UIs with React, HTML/CSS and wire them to secure Django/Python APIs with SQL and Laravel when needed. I handle scoping, development, testing, deployment, and optimizing performance, SEO, and usability.</p>
                        <div className="experienceskilldiv">
                            <ButtonComp text="HTML" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="CSS" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="JS" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="React js" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="Django" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="SQL" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="Laravel" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                        </div>
                    </div>
                    <div className={`timeline_star3 ${darkMode ? 'darkmoderound' : 'lightmoderound'}`}>
                        <i className="fa-solid fa-briefcase iconfont"></i>
                    </div>
                    <div className={`thirdexperiencediv ${darkMode ? 'darkmodeaboutcard darkmodetext' : 'lightmodeaboutcard lightmodetext'}`}>
                        <h1 className='h1smalltext'>PROGRAMMER TRAINEE</h1>
                        <div className="yearofexp">
                            <p className='ptext'>Brahmaa Infotek</p>
                            <p className='ptext'>March 2023 - March 2024</p>
                        </div>
                        <p className='ptext panywhere'>Programmer Trainee at Brahmaa Infotek, building responsive React UIs with HTML/CSS and reusable components. I also tested API data (status codes, JSON shape, edge cases in Postman) and integrated responses into the front end, handling loading/error states, data mapping, and UI validation.</p>
                        <div className="experienceskilldiv">
                            <ButtonComp text="HTML" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="CSS" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="React js" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="Bootstrap" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                            <ButtonComp text="SQL" className={`${darkMode ? 'darkmodetwobutton' : 'lightmodetwobutton'}`}/>
                        </div>
                    </div>
                    <div className={`timeline_star4 ${darkMode ? 'darkmoderound' : 'lightmoderound'}`}>
                        <i className="fa-solid fa-graduation-cap iconfont"></i>
                    </div>
                     <div className={`fourthexperiencediv ${darkMode ? 'darkmodeaboutcard darkmodetext' : 'lightmodeaboutcard lightmodetext'}`}>
                        <h1 className='h1smalltext'>BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE</h1>
                        <div className="yearofexp">
                            <p className='ptext'>Saintgits College of Engineering</p>
                            <p className='ptext'>2019 - 2023</p>
                        </div>
                        <p className='ptext panywhere'>B.Tech in Computer Science with a strong foundation in data structures & algorithms, OOP, databases, operating systems, and computer networks. Built team projects and a capstone using modern web technologies, applying clean architecture, testing, and version control.</p>
                    </div>
                    <div className={`experiencedotone ${darkMode ? 'darkmoderound' : 'lightmoderound'}`}></div>
                    <div className={`experiencedottwo ${darkMode ? 'darkmoderound' : 'lightmoderound'}`}></div>
                </div>
            </div>
        </>
    )
}

export default Experience_Comp;