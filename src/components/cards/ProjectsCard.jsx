import React from "react";

function ProjectsCard({ data }) {
  const {
    name,
    image,
    description,
    source_code_link,
    deployedLink,
    technologies,
  } = data;

  return (
    <div className="bg-zinc-800 w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-2xl overflow-hidden transition-all duration-300 border-2 border-transparent hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20">
      {/* Image Container */}
      <div className="h-48 relative overflow-hidden">
        <img
          className="w-full h-full object-cover  transition-transform duration-300 hover:scale-110"
          src={image}
          alt={`${name} project screenshot`}
        />

        {/* Links overlay - Always visible on mobile, hover on desktop */}
        <div className="absolute inset-0 bg-black/50 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 opacity-100 md:opacity-0">
          {deployedLink && (
            <a
              href={deployedLink}
              target="_blank"
              rel=""
              className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span className="hidden md:inline">Demo</span>
            </a>
          )}
          {source_code_link && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-green-500 rounded-lg hover:bg-green-500/20 transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span className="hidden md:inline">Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{name}</h3>
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-xs ${tech.color} rounded-full cursor-pointer`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;