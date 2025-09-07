import React from "react";

const skills = [
    { name: "HTML", stars: 5 },
    { name: "CSS", stars: 5 },
    { name: "JavaScript", stars: 4 },
    { name: "Core Java", stars: 4 },
    { name: "MySQL", stars: 5 },
    { name: "Git, BASH", stars: 4 },
    { name: "Leadership", stars: 4 }
];

export default function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
                {skills.map(skill => (
                    <div className="skill-card" key={skill.name}>
                        <span className="skill-name">{skill.name}</span>
                        <span className="stars">{'★'.repeat(skill.stars)}{'☆'.repeat(5 - skill.stars)}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
