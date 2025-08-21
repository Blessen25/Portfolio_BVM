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

export type { HeaderProps, buttonProps, aboutcardProps };