import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const savedTheme = window.localStorage.getItem("theme");
const isDarkTheme = savedTheme ? savedTheme === "dark" : true;
const savedLanguage = window.localStorage.getItem("language");

document.documentElement.classList.toggle("dark", isDarkTheme);
document.documentElement.lang = savedLanguage === "en" ? "en" : "ar";
document.documentElement.dir = savedLanguage === "en" ? "ltr" : "rtl";

createRoot(document.getElementById("root")!).render(<App />);
