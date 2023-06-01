import ProfileButtons from "@/components/profile/profileButtons";
import ProfileCore from "@/components/profile/profileCore";
import ProfileSummary from "@/components/profile/profileSummary";

export default function Profile() {

    return (
        <header className="profile container">
            <div className="profile__container grid">
                <ProfileCore />
                <ProfileSummary />
                <ProfileButtons />
            </div>
        </header>
    );
}