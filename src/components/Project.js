import { Fragment } from "react";

const Project = ({ project }) => {
    return (
        <Fragment>
            <a
                href={project.link}
                rel="noopener noreferred noreferrer"
                target="_blank"
                className="sm:w-1/2 w-100 p-4"
            >
                <div className="flex relative">
                    <img
                        alt={project.title}
                        className="absolute z-2 inset-0 w-full h-full object-cover object-center"
                        src={project.image}
                    />
                    <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                            {project.subtitle}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                            {project.title}
                        </h1>
                        <p className="leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                    
                </div>
            </a>
        </Fragment>
    )
}

export default Project;
