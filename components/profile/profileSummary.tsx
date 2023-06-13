import { strings } from "@/lib/strings.enUS"

interface FieldOfWork {
    name: string,
    years: number,
}

export default function ProfileSummary() {
    const yearStrings: FieldOfWork[] = strings.profile.fieldsOfWork;

    const yearBlocks = yearStrings.map((field, index) => {
        return (
            <div key={index} className="profile__info-group">
                <h3 className="profile__info-number">
                    {field.name}
                </h3>
                <p className="profile__info-description">
                    {field.years}
                </p>
            </div>
        );
    });

    return (
        <div className="profile__info grid">
            {yearBlocks}
        </div>
    );
}