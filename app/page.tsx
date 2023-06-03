'use client';
import { strings } from "@/lib/strings.enUS";

// TODO: Update this to meaningful pictures
import projectPic1 from "../assets/img/project1.jpg"
import projectPic2 from "../assets/img/project2.jpg"
import projectPic3 from "../assets/img/project3.jpg"
import projectPic4 from "../assets/img/project4.jpg"
import projectPic5 from "../assets/img/project5.jpg"

import Profile from "@/components/profile";
import Project, { IProject } from "@/components/project";
import SkillGroup, { ISkillGroup } from "@/components/skillGroup";
import { useState } from "react";

const MAGIC_STRINGS = {
    DARK_THEME: "dark-theme",
    LIGHT_THEME: "light-theme",
    SELECTED_THEME: "selected-theme",
}

export default function Page() {
    // Theme handling
    const [ selectedTheme, setSelectedTheme ] = useState(localStorage.getItem('selected-theme') || "dark-theme");
    const themeIconClass = selectedTheme === MAGIC_STRINGS.LIGHT_THEME ? "ri-sun-line" : "ri-moon-line";
    const themeHandler = () => {
        if (selectedTheme === MAGIC_STRINGS.DARK_THEME) {
            setSelectedTheme(MAGIC_STRINGS.LIGHT_THEME);
            localStorage.setItem(MAGIC_STRINGS.SELECTED_THEME, MAGIC_STRINGS.LIGHT_THEME);

            // Updating the body class requires a different approach, since moving this code into layout.tsx
            // would require making the core layout a Client component, which causes other issues
            document.body.classList.replace(MAGIC_STRINGS.DARK_THEME, MAGIC_STRINGS.LIGHT_THEME);
        } else {
            setSelectedTheme(MAGIC_STRINGS.DARK_THEME);
            localStorage.setItem(MAGIC_STRINGS.SELECTED_THEME, MAGIC_STRINGS.DARK_THEME);
            document.body.classList.replace(MAGIC_STRINGS.LIGHT_THEME, MAGIC_STRINGS.DARK_THEME);
        }
    }

    // Tab handling
    const [ activeTab, setActiveTab ] = useState();
    const tabHandler = () => {

    };

    // Create Projects and Skills from locale strings
    const projStrs: IProject[]  = strings.projects;
    const skillGroupStrs: ISkillGroup[] = strings.skills;

    const projPics = [projectPic1, projectPic2, projectPic3, projectPic4, projectPic5];
    const projects = projStrs.map((project, index) => {
        return (
            <Project
                imageSrc={projPics[index]}
                key={index}
                link={project.link}
                subtitle={project.subtitle}
                title={project.title}
            />
        )
    });

    const skillGroups = skillGroupStrs.map((skillGroup, index) => {
        return (
            <SkillGroup key={index} title={skillGroup.title} skills={skillGroup.skills} />
        );
    });

    return (
        <>
            <i className={`${themeIconClass} change-theme`} onClick={themeHandler}>{strings.changeTheme}</i>
            <Profile />

            <main className="main">
                <section className="filters container">
                    <ul className="filters__content">
                        <button className={`filters__button ${activeTab}`} data-target="#projects">
                            {strings.tabs.projects}
                        </button>
                        <button className="filters__button" data-target="#skills">
                            {strings.tabs.skills}
                        </button>
                    </ul>

                    <div className="filters__sections">
                        <div className="projects__content grid filters__active" data-content="" id="projects">
                            {projects}
                        </div>

                        <div className="skills__content grid" data-content="" id="skills">
                            {skillGroups}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer container">
                <span className="footer__copy">
                    {strings.copyright}
                </span>
            </footer>
        </>
    );
}