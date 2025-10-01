"use client";

import { 
  SiCss3, 
  SiJavascript, 
  SiPhp, 
  SiBootstrap, 
  SiCodeigniter, 
  SiTailwindcss, 
  SiLaravel, 
  SiReact, 
  SiMysql, 
  SiArduino, 
  SiWordpress
} from 'react-icons/si';

function Skills() {
  const skills = [
    { icon: <SiCss3 />, color: "text-blue-500" },
    { icon: <SiJavascript />, color: "text-yellow-400" },
    { icon: <SiPhp />, color: "text-indigo-500" },
    { icon: <SiBootstrap />, color: "text-purple-600" },
    { icon: <SiCodeigniter />, color: "text-red-500" },
    { icon: <SiTailwindcss />, color: "text-cyan-400" },
    { icon: <SiLaravel />, color: "text-red-600" },
    { icon: <SiReact />, color: "text-sky-500" },
    { icon: <SiMysql />, color: "text-blue-600" },
    { icon: <SiWordpress />, color: "text-blue-600" },
    { icon: <SiArduino />, color: "text-teal-500" },
  ];

  return (
    <div id="skills" className="w-full py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-12 text-slate-800">Experience</h2>
        
        <div
          className="scroller w-full max-w-5xl mx-auto overflow-hidden"
          style={{
            "--duration": "50s",
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          } as React.CSSProperties}
        >
          <div className="scroller__inner flex gap-6">

            {skills.map((skill, index) => (
              <div key={index} className="flex items-center justify-center bg-white p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <span className={`text-5xl ${skill.color}`}>{skill.icon}</span>
              </div>
            ))}

            {skills.map((skill, index) => (
              <div key={`duplicate-${index}`} aria-hidden="true" className="flex items-center justify-center bg-white p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <span className={`text-5xl ${skill.color}`}>{skill.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;