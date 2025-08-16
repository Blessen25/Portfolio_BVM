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

export type { HeaderProps, buttonProps };