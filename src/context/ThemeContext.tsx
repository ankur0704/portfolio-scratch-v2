"use client";


import { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    toogleTheme: () => void;
};

//create context

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    //load saved theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    //apply theme to DOM
    useEffect(() => {
        if (theme == "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    //toogle function
    const toogleTheme = () => {
        setTheme(theme == "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
            {children}

        </ThemeContext.Provider>
    );
}

//custom hook

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
}