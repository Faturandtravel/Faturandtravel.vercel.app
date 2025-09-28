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
  SiArduino 
} from 'react-icons/si';

// import './Skills.css'; 

function Skills() {
  const skills = [
    { name: "CSS", icon: <SiCss3 />, color: "text-blue-500" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "PHP", icon: <SiPhp />, color: "text-indigo-500" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
    { name: "Codeigniter", icon: <SiCodeigniter />, color: "text-red-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "Laravel", icon: <SiLaravel />, color: "text-red-600" },
    { name: "ReactJS", icon: <SiReact />, color: "text-sky-500" },
    { name: "MySql", icon: <SiMysql />, color: "text-blue-600" },
    { name: "Arduino IDE", icon: <SiArduino />, color: "text-teal-500" },
  ];

  return (
    <div id="skills" className="w-full py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        
        <div
          className="scroller w-full max-w-4xl mx-auto overflow-hidden"
          style={{ "--duration": "50s" } as React.CSSProperties}
        >
          <div className="scroller__inner flex gap-4 sm:gap-6">

            {skills.map((skill, index) => (
              <div key={index} className="skill-item flex items-center gap-3 sm:gap-4 bg-card border px-6 py-3 sm:px-8 sm:py-4 whitespace-nowrap">
                <span className={`text-2xl sm:text-3xl ${skill.color}`}>{skill.icon}</span>
                <span className="font-medium text-card-foreground text-sm sm:text-base">{skill.name}</span>
              </div>
            ))}

            {skills.map((skill, index) => (
              <div key={`duplicate-${index}`} aria-hidden="true" className="skill-item flex items-center gap-3 sm:gap-4 bg-card border px-6 py-3 sm:px-8 sm:py-4 whitespace-nowrap">
                <span className={`text-2xl sm:text-3xl ${skill.color}`}>{skill.icon}</span>
                <span className="font-medium text-card-foreground text-sm sm:text-base">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;