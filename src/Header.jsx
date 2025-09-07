import React from "react";

export default function Header() {
    return (
        <header className="header">
            <div className="profile">
                <img src="/circle.png" alt="Profile" className="profile-pic" />
                <div>
                    <h1>Swaroop H G</h1>
                    <p>Junior Software Engineer at Idea Infinity IT Solutions</p>
                </div>
            </div>
            <nav>
                <a href="https://www.linkedin.com/in/swaroop-h-g-b482b9242/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Swaroop44ops" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}
