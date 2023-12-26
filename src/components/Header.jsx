import { useEffect, useState } from 'react';
import MoonIcon from "./icons/MoonIcon";
import { useTranslation } from "react-i18next";
import SunIcon from './icons/SunIcon';
const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {

    const [t] = useTranslation("traduccion");
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode])
    // function handleChangeTheme() {
    //     const body = document.querySelector("body");
    //     body.classList.toggle("dark");
    // }
    return (
        <header className="pt-8 container mx-auto px-4 max-w-2xl">
            <div className="flex justify-between">
                <h1 className="text-white text-3xl font-semibold tracking-[8px]">{t("header.title")}</h1>
                <button className="" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <SunIcon /> : <MoonIcon />}</button>
            </div>
        </header>
    )
}

export default Header;