import React from 'react';
import { GraduationCap, BookOpen, LibraryBig } from 'lucide-react';
import { educationData } from '../constants/constants';

function Education() {
  

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16  text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <LibraryBig className="w-10 h-10 text-green-500" />
          <h2 className="text-3xl md:text-4xl font-bold">Academic Journey</h2>
        </div>

        <div className="space-y-8 relative before:absolute before:left-1 before:h-full before:w-1 before:bg-zinc-700 before:rounded-full">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="relative pl-9 group"
            >
              <div className="absolute left-2 top-4 -translate-x-1/2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-zinc-900" />
                </div>
              </div>

              <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700 transition-all duration-300 group-hover:border-green-500/50 group-hover:shadow-xl group-hover:shadow-green-500/10">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-green-500 font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    {edu?.coursework?.core.length > 0 || edu?.coursework?.electives.length > 0 && <h4 className="font-medium mb-3 text-zinc-400">Core Curriculum</h4>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu?.coursework?.core?.map((subject, i) => (
                        <div 
                          key={i}
                          className="flex items-center gap-3 px-4 py-2 bg-zinc-700/50 rounded-lg hover:bg-zinc-700 transition-colors"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-sm">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {edu?.coursework?.electives && (
                    <div>
                      <h4 className="font-medium mb-3 text-zinc-400">Electives & Specializations</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.electives.map((elective, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1.5 text-sm bg-zinc-700 rounded-full border border-zinc-600 hover:border-green-500/50 transition-colors"
                          >
                            {elective}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;