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
import { MouseEventHandler, useEffect, useState } from "react";

const MAGIC_STRINGS = {
    DARK_THEME: "dark-theme",
    LIGHT_THEME: "light-theme",
    SELECTED_THEME: "selected-theme",
}

export default function Page() {
    /**
     * Theme handling
     */
    const [ selectedTheme, setSelectedTheme ] = useState(localStorage.getItem('selected-theme') || "dark-theme");
    const themeIconClass = selectedTheme === MAGIC_STRINGS.LIGHT_THEME ? "ri-sun-line" : "ri-moon-line";
    // TODO: Update this to use the same style as tabHandler?
    const themeHandler: MouseEventHandler<HTMLButtonElement> = () => {
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

    /**
     * Theme handling
     */
    const [ activeTab, setActiveTab ] = useState("projects");
    const tabHandler: MouseEventHandler<HTMLButtonElement> = (e ) => {
        setActiveTab(e.currentTarget.getAttribute("data-target"));
    };

    // Moving these outside the useEffect call because they will never change
    // Adding them to deps to make the linter happy
    const tabButtons: NodeListOf<HTMLButtonElement> =
        document.querySelectorAll(".filters [data-target]");
    const tabContainers: NodeListOf<HTMLDivElement> =
        document.querySelectorAll(".filters [data-content]");
    useEffect(() => {
        tabButtons.forEach((btn) => {
            btn.classList.toggle(
                "filter-tab-active",
                btn.getAttribute("data-target")
                === activeTab
            );
        })
        tabContainers.forEach((cont) => {
            cont.classList.toggle(
                "filters__active",
                cont.getAttribute("data-content")
                === activeTab
            );
        })
    }, [tabButtons, tabContainers, activeTab]);

    /**
     * Create Projects and Skills from locale strings
     */
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

    /**
     * Render
     */
    return (
        <>
            <i className={`${themeIconClass} change-theme`} onClick={themeHandler}>{strings.changeTheme}</i>
            <Profile />

            <main className="main">
                <section className="filters container">
                    <ul className="filters__content">
                        <button className="filters__button" onClick={tabHandler} data-target="projects">
                            {strings.tabs.projects}
                        </button>
                        <button className="filters__button" onClick={tabHandler} data-target="skills">
                            {strings.tabs.skills}
                        </button>
                    </ul>

                    <div className="filters__sections">
                        <div className="projects__content grid" data-content="projects" id="projects">
                            {projects}
                        </div>

                        <div className="skills__content grid" data-content="skills" id="skills">
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