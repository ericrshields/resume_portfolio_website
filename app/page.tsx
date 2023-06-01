'use client';

import Image from "next/image";

import pic from "../assets/img/pic.png"
import projectPic1 from "../assets/img/project1.jpg"
import projectPic2 from "../assets/img/project2.jpg"
import projectPic3 from "../assets/img/project3.jpg"
import projectPic4 from "../assets/img/project4.jpg"
import projectPic5 from "../assets/img/project5.jpg"

export default function Home() {
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


  return (
    <>
      <header className="profile container">
        <i className="ri-moon-line change-theme" id="theme-button">Change theme</i>

        <div className="profile__container grid">
          <div className="profile__data">
            <div className="profile__border">
              <div className="profile__perfil">

                <Image src={pic} alt="" />
              </div>
            </div>

            <h2 className="profile__name">Vaibhav Tomar</h2>
            <h3 className="profile__profession">Aspiring  Developer</h3>

            <ul className="profile__social">
              <a href="@/app/page" target="_blank" className="profile__social-link">
                <i className="ri-linkedin-box-line"></i>
              </a>
              <a href="https://github.com/vaibhavtomar04" target="_blank" className="profile__social-link">
                <i className="ri-github-line"></i>
              </a>
            </ul>
          </div>

          <div className="profile__info grid">
            <div className="profile__info-group">
              <h3 className="profile__info-number">1</h3>
              <p className="profile__info-description">
                Years of <br /> work
              </p>
            </div>
            <div className="profile__info-group">
              <h3 className="profile__info-number">0</h3>
              <p className="profile__info-description">
                Completed <br /> projects
              </p>
            </div>
            <div className="profile__info-group">
              <h3 className="profile__info-number">0</h3>
              <p className="profile__info-description">Satisfied <br /> customers</p>
            </div>
          </div>

          <div className="profile__buttons">
            <a download="" href="assets/pdf/Vaibhavtomar_resume.pdf" className="button">
              Download CV <i className="ri-download-line"></i>
            </a>

            <div className="profile__buttons-small">

              <a href="https://api.whatsapp.com/send?phone=+919999999999&text=Hello, more information!" target="_blank" className="button button__small button__gray">
                <i className="ri-whatsapp-line"></i>
              </a>
              <a href="https://m.me/vaibhav" target="_blank" className="button button__small button__gray">
                <i className="ri-messenger-line"></i>
              </a>

            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="filters container">
          <ul className="filters__content">
            <button className="filters__button filter-tab-active" data-target="#projects">
              Projects
            </button>
            <button className="filters__button" data-target="#skills">
              Skills
            </button>
          </ul>

          <div className="filters__sections">
            <div className="projects__content grid filters__active" data-content="" id="projects">
              <article className="projects__card">
                <Image src={projectPic1} alt="" className="projects__img" />

                  <div className="projects__modal">
                    <div>
                      <span className="projects__subtitle">CMS</span>
                      <h3 className="projects__title">College Management System</h3>
                      <a href="https://github.com/vaibhavtomar04/College_management_system_java" className="projects__button button button__small">
                        <i className="ri-link"></i>
                      </a>
                    </div>
                  </div>
              </article>

              <article className="projects__card">
                <Image src={projectPic2} alt="" className="projects__img" />

                  <div className="projects__modal">
                    <div>
                      <span className="projects__subtitle">Web</span>
                      <h3 className="projects__title">Responsive Website</h3>
                      <a href="https://github.com/vaibhavtomar04/InteriorDesignsWebsite" className="projects__button button button__small">
                        <i className="ri-link"></i>
                      </a>
                    </div>
                  </div>
              </article>

              <article className="projects__card">
                <Image src={projectPic3} alt="" className="projects__img" />

                  <div className="projects__modal">
                    <div>
                      <span className="projects__subtitle">sample</span>
                      <h3 className="projects__title">Empty</h3>
                      <a href="@/app/page#" className="projects__button button button__small">
                        <i className="ri-link"></i>
                      </a>
                    </div>
                  </div>
              </article>

              <article className="projects__card">
                <Image src={projectPic4} alt="" className="projects__img" />

                  <div className="projects__modal">
                    <div>
                      <span className="projects__subtitle">sample</span>
                      <h3 className="projects__title">Empty</h3>
                      <a href="@/app/page#" className="projects__button button button__small">
                        <i className="ri-link"></i>
                      </a>
                    </div>
                  </div>
              </article>

              <article className="projects__card">
                <Image src={projectPic5} alt="" className="projects__img" />

                  <div className="projects__modal">
                    <div>
                      <span className="projects__subtitle">sample</span>
                      <h3 className="projects__title">Empty</h3>
                      <a href="@/app/page#" className="projects__button button button__small">
                        <i className="ri-link"></i>
                      </a>
                    </div>
                  </div>
              </article>
            </div>

            <div className="skills__content grid" data-content="" id="skills">
              <div className="skills__area">
                <h3 className="skills__title">Frontend Developer</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="skills__area">
                <h3 className="skills__title">Backend Developer</h3>

                <div className="skills__box">
                  <div className="skills__group">

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Advance</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
            <span className="footer__copy">
                &#169; Eric Shields. All rights reserved
            </span>
      </footer>
    </>
  )
}