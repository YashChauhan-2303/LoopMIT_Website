import React from "react";
import { Children, createContext,useContext,useEffect,useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(()=>{ 
        const root = document.documentElement

        darkMode ? root.classList.add('dark') : root.classList.remove('dark');
    },[darkMode])

    const toggleDarkMode = () => setDarkMode ((prev)=>!prev)
    
    return <ThemeContext.Provider value={{darkMode ,toggleDarkMode}}>{children}</ThemeContext.Provider>

}

export const useTheme = () => useContext(ThemeContext)