import {strings, yearNumbers} from "@/lib/strings.enUS"

export default function ProfileSummary() {

    // TODO: DRY this
    return (
        <div className="profile__info grid">
            <div className="profile__info-group">
                <h3 className="profile__info-number">
                    {yearNumbers.work}
                </h3>
                <p className="profile__info-description">
                    {strings.profile.yearsOfWork}
                </p>
            </div>
            <div className="profile__info-group">
                <h3 className="profile__info-number">
                    {yearNumbers.front}
                </h3>
                <p className="profile__info-description">
                    {strings.profile.yearsOfFrontEnd}
                </p>
            </div>
            <div className="profile__info-group">
                <h3 className="profile__info-number">
                    {yearNumbers.full}
                </h3>
                <p className="profile__info-description">
                    {strings.profile.yearsOfFullStack}
                </p>
            </div>
        </div>
    )
}