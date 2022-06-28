import logo from "./logo.svg";
import "./App.css";
import Info from "./components/Info";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React from "react";

function App() {

    const [darkMode, setDarkMode] = React.useState(false);

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

  return (
    <div className="App">
      <div className={darkMode ? "dark buisness-card" : "buisness-card"}>
        <Info darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Main/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
