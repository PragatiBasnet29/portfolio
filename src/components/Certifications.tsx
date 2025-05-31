import { Award, FileText, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credential?: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "April 2023",
      description: "Comprehensive course covering front-end and back-end development with modern technologies including React, Node.js, and MongoDB.",
      credential: "#"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "January 2023",
      description: "Advanced JavaScript concepts, algorithms, and data structures implementation and problem-solving techniques.",
      credential: "#"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "November 2022",
      description: "Creating responsive layouts using HTML, CSS, and modern design principles for various device sizes.",
      credential: "#"
    },
    {
      title: "Python for Data Science",
      issuer: "Coursera",
      date: "August 2022",
      description: "Data analysis, visualization, and machine learning basics using Python and popular libraries like NumPy and Pandas.",
      credential: "#"
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Udemy",
      date: "June 2022",
      description: "User interface design principles, user experience best practices, and prototyping techniques.",
      credential: "#"
    },
    {
      title: "Git & GitHub Complete Guide",
      issuer: "Udemy",
      date: "March 2022",
      description: "Version control workflow, collaboration techniques, and best practices for software development using Git and GitHub.",
      credential: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Certifications & Courses</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            I'm committed to continuous learning and have completed various certifications to enhance my skills in different areas of technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              <div className="bg-blue-500 p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <Award className="text-white mr-2" size={20} />
                  <span className="text-white font-medium">Certificate</span>
                </div>
                <span className="text-blue-100 text-sm">{cert.date}</span>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{cert.title}</h3>
                <h4 className="text-lg font-medium mb-4 text-blue-600 dark:text-blue-400">{cert.issuer}</h4>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">{cert.description}</p>
                
                {cert.credential && (
                  <a 
                    href={cert.credential} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors group-hover:underline"
                  >
                    <FileText size={16} className="mr-2" /> 
                    View Credential
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            These certifications represent my dedication to mastering new skills and staying current with industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;