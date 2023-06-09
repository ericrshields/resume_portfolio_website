// TODO: Play with actual translations

// TODO: Replace with stars, wheel, or other more granular and graphical display
export const skillLevel = {
    advanced: "Advanced",
    basic: "Basic",
    intermediate: "Intermediate",
};

export const strings = {
    metadata: {
        title: 'Coding by Eric',
        description: 'Resume, Projects, and Portfolio for Eric R. Shields',
    },
    changeTheme: "Change Theme",
    profile: {
        pictureAlt: "Professional Headshot",
        name: "Eric Shields",
        byline: "Senior Front End Engineer",
        fieldsOfWork: [
            {
                name: "All professional work",
                years: 19,
            },
            {
                name: "Front End Engineer",
                years: 7,
            },
            {
                name: "Full Stack Engineer",
                years: 5.5,
            },
            {
                name: "Back End Engineer",
                years: 3,
            },
        ],
    },
    social: {
        linkedIn: "LinkedIn",
        github: "Github",
        downloadResume: "Download Resume/CV",
    },
    tabs: {
        projects: "Projects",
        skills: "Skills",
    },
    projects: [
        {
            title: "Portfolio Website",
            subtitle: "This website!",
            link: "https://github.com/ericrshields/resume_portfolio_website",
        },
        {
            title: "Previous Resume",
            subtitle: "Out of Date",
            link: "https://github.com/ericrshields/ericrshields_resume",
        },
        {
            title: "Previous Sandbox Website",
            subtitle: "Not currently hosted",
            link: "https://github.com/coldcandor/website",
        },
    ],
    skills: [
        {
            title: "Frontend Developer",
            skills: [
                {
                    name: "JS",
                    level: skillLevel.advanced,
                }, {
                    name: "React.js",
                    level: skillLevel.advanced,
                }, {
                    name: "TypeScript",
                    level: skillLevel.advanced,
                }, {
                    name: "Redux.js",
                    level: skillLevel.intermediate,
                }, {
                    name: "jQuery",
                    level: skillLevel.intermediate,
                }, {
                    name: "HTML5",
                    level: skillLevel.intermediate,
                }, {
                    name: "JSP",
                    level: skillLevel.intermediate,
                }, {
                    name: "CSS3",
                    level: skillLevel.intermediate,
                }, {
                    name: "bootstrap",
                    level: skillLevel.basic,
                }
            ]
        }, {
            title: "Platform, Testing, & Operations",
            skills: [
                {
                    name: "git",
                    level: skillLevel.advanced,
                }, {
                    name: "Continuous Integration & Development",
                    level: skillLevel.intermediate,
                }, {
                    name: "jest.js",
                    level: skillLevel.intermediate,
                }, {
                    name: "next.js",
                    level: skillLevel.intermediate,
                }, {
                    name: "Node/npm",
                    level: skillLevel.basic,
                }, {
                    name: "webpack",
                    level: skillLevel.basic,
                }, {
                    name: "AWS Cloud",
                    level: skillLevel.basic,
                }
            ]
        }, {
            title: "Backend Developer",
            skills: [
                {
                    name: "Java",
                    level: skillLevel.advanced,
                }, {
                    name: "PHP",
                    level: skillLevel.intermediate,
                }, {
                    name: "SQL",
                    level: skillLevel.intermediate,
                }, {
                    name: "Java Spring",
                    level: skillLevel.basic,
                }
            ]
        }, {
            title: "Other",
            skills: [
                {
                    name: "Linux",
                    level: skillLevel.advanced,
                }, {
                    name: "Windows",
                    level: skillLevel.advanced,
                }, {
                    name: "Multidisciplinary and Multi-team Collaboration",
                    level: skillLevel.advanced,
                }, {
                    name: "Intellij",
                    level: skillLevel.advanced,
                }, {
                    name: "Agile Methodologies",
                    level: skillLevel.advanced,
                }, {
                    name: "Regular Expressions",
                    level: skillLevel.intermediate,
                }, {
                    name: "Software Documentation",
                    level: skillLevel.intermediate,
                }, {
                    name: "Graphic Design Software",
                    level: skillLevel.basic,
                }
            ]
        }
    ],
    copyright: "© Eric Shields. All rights reserved. Based on the design and code from Vaibhav Tomar"
};

export const links = {
    linkedin: "https://www.linkedin.com/in/ericrshields/",
    github: "https://github.com/ericrshields",
    email: "mailto:inquiry@ericrshields.com?subject=I%20was%20looking%20at%20your%20portfolio%20and%20wanted%20to%20reach%20out..."
};