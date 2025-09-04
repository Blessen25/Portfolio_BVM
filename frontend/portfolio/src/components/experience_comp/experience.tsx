import type { HeaderProps } from '../../interface';
import { AutoTypeCareer } from '../extras';
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
                        <i className={`fa-solid fa-star iconfont`}></i>
                    </div>
                    <div className="firstexperiencediv">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience_Comp;