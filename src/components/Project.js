const Project = ({ project }) => {
    return (
        <>
            <a
                href={project.link}
                rel="noopener noreferred noreferrer"
                target="_blank"
                className="sm:w-1/2 w-100 p-4 z-0">
                <div className="flex relative">
                    <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    src={project.image}
                    />
                    <div className="px-8 py-10 relative z-0 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                    </div>
                    
                </div>
                </a>
        </>
    )
}

export default Project;
