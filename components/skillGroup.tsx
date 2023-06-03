import { skillLevel } from "@/lib/strings.enUS";

export type SkillLevel = typeof skillLevel;

export interface ISkill {
    name: string,
    level: SkillLevel,
}

export interface ISkillGroupProps {
    key: number,
    skills: ISkill[],
    title: string,
}

export type ISkillGroup = Omit<ISkillGroupProps, "key">;

// TODO: Hydrate with prop values - need to iterate over skills
export default function SkillGroup( props: ISkillGroupProps ) {
    // TODO: convert to ul/li
    const skills = props.skills.map((skill, index) => {
        return (
            <div key={index} className="skills__data">
                <i className="ri-checkbox-circle-line">icon</i>

                <div>
                    <h3 className="skills__name">{skill.name}</h3>
                    <span className="skills__level">{skill.level}</span>
                </div>
            </div>
        );
    })

    return (
        <div className="skills__area">
            <h3 className="skills__title">{props.title}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    {skills}
                </div>
            </div>
        </div>
    );
}