import Experience_Comp from "../components/experience_comp/experience";
import type { HeaderProps } from "../interface";

const Experience:React.FC<HeaderProps> = ({darkMode, setDarkMode}) => {

    return(
        
        <>
            <Experience_Comp darkMode={darkMode} setDarkMode={setDarkMode}/>
        </>
    )
}

export default Experience;