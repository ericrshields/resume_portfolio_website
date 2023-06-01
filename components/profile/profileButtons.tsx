import { strings } from "@/lib/strings.enUS";

export default function profileButtons() {

    // TODO: Replace social links with ones I actually care about
    return (
        <div className="profile__buttons">
            <a download="" href="/eric-shields-resume.pdf" className="button">
                {strings.social.downloadResume} <i className="ri-download-line"></i>
            </a>

            <div className="profile__buttons-small">
                <a href="https://api.whatsapp.com/send?phone=+919999999999&text=Hello, more information!" target="_blank" className="button button__small button__gray">
                    <i className="ri-whatsapp-line">Whatsapp</i>
                </a>
                <a href="https://m.me/vaibhav" target="_blank" className="button button__small button__gray">
                    <i className="ri-messenger-line">Messenger</i>
                </a>
            </div>
        </div>
    );
}