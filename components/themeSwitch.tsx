import { MouseEventHandler, useState } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const MAGIC_STRINGS = {
    DARK_THEME: "dark-theme",
    LIGHT_THEME: "light-theme",
    SELECTED_THEME: "selected-theme",
}

export default function ThemeSwitch() {
    // Create empty fallback to prevent runtime "localStorage is not defined" error
    const _localStorage = typeof window !== 'undefined' ? localStorage : {
        length: 0,
        clear() {},
        getItem(key: string): string | null { return ""; },
        key(index: number): string | null { return ""; },
        removeItem(key: string) {},
        setItem(key: string, value: string) {},
    };

    /**
     * Theme handling
     */
    const initialTheme = _localStorage.getItem(MAGIC_STRINGS.SELECTED_THEME) || MAGIC_STRINGS.DARK_THEME;
    const [ selectedTheme, setSelectedTheme ] = useState(initialTheme);
    // TODO: Update this to use the same style as tabHandler?
    const themeHandler: MouseEventHandler<HTMLDivElement> = () => {
        if (selectedTheme === MAGIC_STRINGS.DARK_THEME) {
            setSelectedTheme(MAGIC_STRINGS.LIGHT_THEME);
            _localStorage.setItem(MAGIC_STRINGS.SELECTED_THEME, MAGIC_STRINGS.LIGHT_THEME);

            // Updating the body class requires a different approach, since moving this code into layout.tsx
            // would require making the core layout a Client component, which causes other issues
            document.body.classList.replace(MAGIC_STRINGS.DARK_THEME, MAGIC_STRINGS.LIGHT_THEME);
        } else {
            setSelectedTheme(MAGIC_STRINGS.DARK_THEME);
            _localStorage.setItem(MAGIC_STRINGS.SELECTED_THEME, MAGIC_STRINGS.DARK_THEME);
            document.body.classList.replace(MAGIC_STRINGS.LIGHT_THEME, MAGIC_STRINGS.DARK_THEME);
        }
    }

    return (
        <div className={"change-theme"} onClick={themeHandler}>
            {selectedTheme === MAGIC_STRINGS.DARK_THEME ?
                <RiSunLine /> :
                <RiMoonLine />
            }
        </div>
    );
}