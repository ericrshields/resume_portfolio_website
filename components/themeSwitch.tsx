import { MouseEventHandler, useEffect, useState } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const MAGIC_STRINGS = {
    DARK_THEME: "dark-theme",
    LIGHT_THEME: "light-theme",
    SELECTED_THEME: "selected-theme",
}

export default function ThemeSwitch() {
    /**
     * Theme handling
     */
    const initialTheme = localStorage.getItem(MAGIC_STRINGS.SELECTED_THEME) || MAGIC_STRINGS.DARK_THEME;
    const [ selectedTheme, setSelectedTheme ] = useState(initialTheme);

    const themeHandler: MouseEventHandler<HTMLDivElement> = () => {
        setSelectedTheme(
            selectedTheme === MAGIC_STRINGS.DARK_THEME
                ? MAGIC_STRINGS.LIGHT_THEME
                : MAGIC_STRINGS.DARK_THEME
        );
    }

    useEffect(() => {
        localStorage.setItem(MAGIC_STRINGS.SELECTED_THEME, selectedTheme)
        document.body.classList.remove(MAGIC_STRINGS.DARK_THEME, MAGIC_STRINGS.LIGHT_THEME);
        document.body.classList.add(selectedTheme);
    }, [selectedTheme])

    return (
        <div className={"change-theme"} onClick={themeHandler}>
            {selectedTheme === MAGIC_STRINGS.DARK_THEME ?
                <RiSunLine /> :
                <RiMoonLine />
            }
        </div>
    );
}