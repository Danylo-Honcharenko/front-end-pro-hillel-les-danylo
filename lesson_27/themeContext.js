import {createContext} from "react";

export const theme = {
    default: {
        themeName: "default",
        header: {style: "bg-gray-100"},
        button: {style: "bg-sky-500 text-white"},
        footer: {style: "bg-gray-100"},
        // дефолтный чёрный
        menuItem: {style: ""},
        text: {style: ""},
        body: {style: "bg-white"},
        container: {style: "bg-gray-200"}
    },
    dark: {
        themeName: "dark",
        header: {style: "bg-black"},
        button: {style: "bg-sky-600 text-white"},
        footer: {style: "bg-black"},
        menuItem: {style: ""},
        text: {style: "text-white"},
        body: {style: "bg-gray-900"},
        container: {style: "bg-black text-white"}
    }
}

export const ThemeContext = createContext([]);