import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const savedTheme = window.localStorage.getItem("theme");
const isDarkTheme = savedTheme ? savedTheme === "dark" : true;

document.documentElement.classList.toggle("dark", isDarkTheme);

createRoot(document.getElementById("root")!).render(<App />);
