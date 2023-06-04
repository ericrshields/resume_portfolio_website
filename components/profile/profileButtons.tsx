import { links, strings } from "@/lib/strings.enUS";

import { RiMailLine } from "react-icons/ri"

export default function profileButtons() {

    return (
        <div className="profile__buttons">
            <a download="" href="/eric-shields-resume.pdf" className="button">
                {strings.social.downloadResume} <i className="ri-download-line"></i>
            </a>

            <div className="profile__buttons-small">
                <a href={links.email} target="_blank" className="button button__small button__gray">
                    <RiMailLine />
                </a>
            </div>
        </div>
    );
}