import { strings } from "@/lib/strings.enUS";

export type SkillLevel = strings.skills.level.basic | strings.skills.level.intermediate | strings.skills.level.advanced;

export type Skill = {
    name: string,
    level: SkillLevel,
}

export interface ISkillGroupProps {
    title: string,
    skills: [ Skill ]
}

// TODO: Hydrate with prop values - need to iterate over skills
export default function SkillGroup( props: ISkillGroupProps ) {
    return (
        <div className="skills__area">
            <h3 className="skills__title">{props.title}</h3>

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
    );
}