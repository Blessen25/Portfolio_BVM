interface HeaderProps {

    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;

}

interface buttonProps {

    className ?: string;
    onClick ?: () => void;
    text ?: string;
    disabled ?: boolean;
    hrefroute ?: string;
    target ?: string;
    style ?: React.CSSProperties;
}

interface aboutcardProps {

    darkMode ?: boolean;
    setDarkMode ?: (darkMode: boolean) => void;
    className ?: string;
    h1text ?: string;
    ptext ?: string;
}

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";
export type Skill = {
    name : string;
    level : SkillLevel;
};

export type LiveClockProps = {

    timeZone ?: string;
    withSeconds ?: boolean;
    hour12?: boolean;
}

interface skillcardProps {

    darkMode ?: boolean;
    setDarkMode ?: (darkMode: boolean) => void;
    h1text ?: string;
    title ?: string;
    items ?: Skill[];
}

interface projectcardProps {

    darkMode ?: boolean;
    setDarkMode ?: (darkMode: boolean) => void;
    cardarray ?: {

        title ?: string;
        description ?: string;
        imageUrl ?: string;
    }
}

interface TimeProps {

    className ?: string;
}


export type { HeaderProps, buttonProps, aboutcardProps, skillcardProps, projectcardProps, TimeProps };

