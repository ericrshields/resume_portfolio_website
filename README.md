## Introduction
I built this simple website based on the design by [Vaibhav Tomar](https://github.com/vaibhavtomar04/portfolio).  I just wanted a simple starting point, and this fit the bill and looked decent.

From there, I deconstructed it and rebuilt it according to modern framework approaches.

It is still very much under construction, but I felt that it is complete enough to publish and link to.  This is a solo project that is not intended to have contributions or forks, but if you weirdly want to do so, well go for it I guess? XD

## Goals
This project is intended to accomplish two things:
* Serve as an accessory to my resume to showcase things more specifically than can be done in a resume, cover letter, or on LinkedIn
* Provide me with recent experience working in the most modern of frameworks and processes

## Technology
Platform
* Created with [create-next-app](https://nextjs.org/docs/pages/api-reference/create-next-app)
* Common modern platform tools, including Webpack, bable, Node.js/npm, eslint, and husky

Languages
* React.js
* TypeScript
* Currently, using the compiled HTML and CSS from Tomar's project without much modification
* Server side is handled by Next.js for now

Hosting
* Hosted on GitHub with git-based versioning (obviously)
* Published via [GitHub Actions](https://github.com/ericrshields/resume_portfolio_website/actions) to [GitHub Pages](https://github.com/ericrshields/resume_portfolio_website/tree/gh-pages), using GitHub's recommended Next.js workflow with small modifications
* Published to custom domain [ericrshields.com](https://ericrshields.com), registered with Hover

Project Management
* Using [GitHub Projects](https://github.com/users/ericrshields/projects/1/views/2) for project management to explore and build an understanding of the most common Open Source platform
* Additional management in [ClickUp](https://clickup.com)

## Future
You can see many of the plans via the [Project](https://github.com/users/ericrshields/projects/1/views/2), but I'll give an overview here.  Who knows if I'll have enough free time to do them all, but I'll try!
* Replace the compiled CSS with a CSS framework and heavily customize the styles
* Add additional content, like recommendations, experience, and a summary
* Explore more advanced aspects of the code infrastructure like eslint customization, web analytics, advanced git hooks, etc
* Add testing, both unit and UI/integration
* Demonstrate advanced techniques, like lazy-loading of skills/projects
* House many of my old projects for posterity
* Bunches of small tweaks, improvements, bug fixes, etc

Eventually, the overall goal is to replace LinkedIn profile as the source of truth for my experience, projects, etc. with my own hosted version that will give me far better control over what get showcased and how it gets displayed.  It will also allow deep linking and such.