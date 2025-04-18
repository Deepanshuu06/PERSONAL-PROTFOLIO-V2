import React, { useState } from "react";
import { skills } from "../constants/constants";

const Skills = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });


  const handleHover = (event, image) => {
    setPreviewImage(image);
    const rect = event.target.getBoundingClientRect();
    setPreviewPosition({
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY - 220 // Adjust based on preview height
    });
  };

  return (
    <section className="min-h-screen  pt-25 px-4 lg:py-30 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 p-6 rounded-xl transition-all duration-300 hover:bg-zinc-700 hover:shadow-lg hover:shadow-green-500/10 relative"
              onMouseEnter={(e) => handleHover(e, skill.image)}
              onMouseLeave={() => setPreviewImage("")}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <span className="text-white font-medium">{skill.name}</span>
              </div>
            </a>
          ))}
        </div>

        {previewImage && (
          <div
            className="fixed hidden md:block w-96 h-48 bg-zinc-800 rounded-xl overflow-hidden border-2 border-green-500/30 shadow-lg transition-opacity duration-300"
            style={{
              left: `${previewPosition.x}px`,
              top: `${previewPosition.y}px`
            }}
          >
            <img
              src={previewImage}
              alt="Skill preview"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;