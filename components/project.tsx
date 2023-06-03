import Image from "next/image";

export interface IProjectProps {
    imageSrc: string,
    key: number,
    link: string
    subtitle: string,
    title: string,
}

export type IProject = Omit<IProjectProps, "imageSrc" | "key">;

export default function Project(props: IProjectProps) {
    return (
        <article className="projects__card">
            <Image src={props.imageSrc} alt="" className="projects__img"/>

            <div className="projects__modal">
                <div>
                    <span className="projects__subtitle">{props.subtitle}</span>
                    <h3 className="projects__title">{props.title}</h3>
                    <a href={props.link} className="projects__button button button__small">
                        <i className="ri-link"></i>
                    </a>
                </div>
            </div>
        </article>
    );
}