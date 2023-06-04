import { RiLinkedinBoxLine, RiGithubLine } from "react-icons/ri"

import Image from "next/image";
import pic from "@/assets/img/professional-headshot.jpg";
import {links, strings} from "@/lib/strings.enUS"

export default function ProfileCore() {
    return (
        <div className="profile__data">
            <div className="profile__border">
                <div className="profile__perfil">
                    <Image src={pic} alt={strings.profile.pictureAlt} priority={true} />
                </div>
            </div>

            <h2 className="profile__name">{strings.profile.name}</h2>
            <h3 className="profile__profession">{strings.profile.byline}</h3>

            <ul className="profile__social">
                <a href={links.linkedin} target="_blank" className="profile__social-link">
                    <RiLinkedinBoxLine />
                </a>
                <a href={links.github} target="_blank" className="profile__social-link">
                    <RiGithubLine />
                </a>
            </ul>
        </div>
    )
}