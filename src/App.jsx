import React from "react";
import './App.css';
import Header from "./Header";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

function App() {
    return (
        <div className="container">
            <Header />
            <Contact />
            <Education />
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
