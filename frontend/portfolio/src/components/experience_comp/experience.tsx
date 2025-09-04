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
                    
                </div>
            </div>
        </>
    )
}

export default Experience_Comp;