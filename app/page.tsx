'use client';
import { strings } from "@/lib/strings.enUS";

import projectPic1 from "../assets/img/project1.jpg"
import projectPic2 from "../assets/img/project2.jpg"
import projectPic3 from "../assets/img/project3.jpg"
import projectPic4 from "../assets/img/project4.jpg"
import projectPic5 from "../assets/img/project5.jpg"

import Profile from "@/components/profile";
import Project, { IProject } from "@/components/project";
import SkillGroup, { ISkillGroup } from "@/components/skillGroup";

export default function Page() {
    // /*=============== FILTERS TABS ===============*/
    // const tabs = document.querySelectorAll('[data-target]'),
    //     tabContents = document.querySelectorAll('[data-content]')
    //
    // tabs.forEach(tab =>{
    //   tab.addEventListener('click', () =>{
    //     const target = document.querySelector(tab.dataset.target)
    //
    //     tabContents.forEach(tc =>{
    //       tc.classList.remove('filters__active')
    //     })
    //     target.classList.add('filters__active')
    //
    //     tabs.forEach(t =>{
    //       t.classList.remove('filter-tab-active')
    //     })
    //     tab.classList.add('filter-tab-active')
    //   })
    // })
    //
    // /*=============== DARK LIGHT THEME ===============*/
    // const themeButton = document.getElementById('theme-button')
    // const darkTheme = 'dark-theme'
    // const iconTheme = 'ri-sun-line'
    //
    // // Previously selected topic (if user selected)
    // const selectedTheme = localStorage.getItem('selected-theme')
    // const selectedIcon = localStorage.getItem('selected-icon')
    //
    // // We obtain the current theme that the interface has by validating the dark-theme class
    // const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    // const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
    //
    // // We validate if the user previously chose a topic
    // if (selectedTheme) {
    //   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    //   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    //   themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
    // }
    //
    // // Activate / deactivate the theme manually with the button
    // themeButton.addEventListener('click', () => {
    //   // Add or remove the dark / icon theme
    //   document.body.classList.toggle(darkTheme)
    //   themeButton.classList.toggle(iconTheme)
    //   // We save the theme and the current icon that the user chose
    //   localStorage.setItem('selected-theme', getCurrentTheme())
    //   localStorage.setItem('selected-icon', getCurrentIcon())
    // })

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
    })

    return (
        <>
            <i className="ri-moon-line change-theme" id="theme-button">{strings.changeTheme}</i>
            <Profile />

            <main className="main">
                <section className="filters container">
                    <ul className="filters__content">
                        <button className="filters__button filter-tab-active" data-target="#projects">
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
    )
}