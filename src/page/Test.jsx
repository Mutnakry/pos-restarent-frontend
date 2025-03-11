import { useState, useEffect } from "react";

function Test() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="p-24 sm:ml-64">
            <div className="h-screen bg-white dark:bg-black flex justify-center items-center">
                <button
                    className="bg-green-200 p-4 rounded-3xl"
                    onClick={handleThemeSwitch}
                >
                    Dark Mode
                </button>
            </div>
        </div>
    );
}

export default Test;
