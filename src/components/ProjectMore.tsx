const projects = [
  {
    title: 'microcontroller based smart greenhouse.',
    category: 'automatic plant watering system using arduino microcontroller and esp8266, as well as humidity and temperature sensors.',
    image: './Projects/green.png',
  },
  {
    title: 'Smart Dustbin (IoT) Using Bolt IoT and Arduino Uno',
    category: 'it is a user friendly automated dustbin which makes the work for the people cleaning it easier also management becomes better.',
    image: './Projects/trash.jpg',
  },
];

const ProjectsMore = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 just">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xs overflow-hidden border border-gray-200 flex flex-col">
              <div className="p-4 sm:p-5 flex-grow flex flex-col"> 
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4" 
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-auto">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ProjectsMore;