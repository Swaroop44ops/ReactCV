import React from "react";

export default function Projects() {
    return (
        <section id="projects">
            <h2>Personal Projects</h2>
            <div className="project-card">
                <h3>Musical Instruments Shop <span>(07/2021 - Present)</span></h3>
                <p>
                    Developed a musical instrument store site using PHP, CSS, and JavaScript with MySQL backend. Includes admin and user sides for ordering instruments easily.
                </p>
            </div>
            <div className="project-card">
                <h3>E-RAIL <span>(06/2022 - Present)</span></h3>
                <p>
                    A mobile app for train ticket booking developed using Android Studio with Java and XML.
                </p>
            </div>
        </section>
    );
}

