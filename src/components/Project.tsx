const projects = [
  {
    title: 'Information website cibungbulang public high school 1.',
    category: 'school website with cms wordpress.',
    image: './Projects/smanbul.png',
  },
  {
    title: 'Information Profile CV. Ibnu Auf Jaya',
    category: 'company profile website with cms wordpress.',
    image: './Projects/iaj.png',
  },
  {
    title: 'E-Commerce website Gemesstore.com',
    category: 'Simple Create an ecommerce website with using codeigniter 3 and CMS Booststrap for Competence test Vocational School',
    image: './Projects/gms.png',
  },
  {
    title: 'Article and E-commerce Website NutrisiLegal.com',
    category: 'Simple Create an ecommerce website with using codeigniter 3 and CMS Booststrap.',
    image: './Projects/ntrs.png',
  },
  {
    title: 'Company Profile & E-Commerce Website Mediformaku.id',
    category: 'company profile and an e-commerce platform, built with CodeIgniter 4.6.3 and Bootstrap 5.',
    image: './Projects/mediforma.png',
  },
];

const ProjectsSection = () => {
  return (
    <section id="project" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Website Projects</h2>
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


export default ProjectsSection;