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

// Theme switcher uses localStorage, so disable server side rendering to prevent hydration errors
import dynamic from "next/dynamic";
const ThemeSwitch = dynamic(() => import("@/components/themeSwitch"), { ssr: false });

export default function Page() {

    /**
     * Theme handling
     */
    const [ activeTab, setActiveTab ] = useState("skills");
    const tabHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
        setActiveTab(e.currentTarget.getAttribute("data-target") || "");
    };

    useEffect(() => {
        const tabButtons: NodeListOf<HTMLButtonElement> =
            document.querySelectorAll(".filters [data-target]");
        const tabContainers: NodeListOf<HTMLDivElement> =
            document.querySelectorAll(".filters [data-content]");
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
    }, [activeTab]);

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
            <ThemeSwitch />

            <Profile />

            <main className="main">
                <section className="filters container">
                    <ul className="filters__content">
                        <button className="filters__button" onClick={tabHandler} data-target="skills">
                            {strings.tabs.skills}
                        </button>
                        <button className="filters__button" onClick={tabHandler} data-target="projects">
                            {strings.tabs.projects}
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