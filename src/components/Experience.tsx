import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences: Experience[] = [
    {
      title: "Software Development Intern",
      company: "Tech Innovations Inc.",
      location: "Remote",
      period: "June 2023 - August 2023",
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with the team to implement new features and fix bugs",
        "Participated in code reviews and provided constructive feedback",
        "Optimized application performance, reducing load time by 30%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Web Solutions Ltd.",
      location: "New York, NY",
      period: "January 2023 - May 2023",
      description: [
        "Built responsive user interfaces using HTML, CSS, and JavaScript",
        "Implemented UI/UX designs using Tailwind CSS and React",
        "Worked on improving accessibility and performance of web applications",
        "Collaborated with designers to ensure pixel-perfect implementation"
      ]
    },
    {
      title: "Research Assistant",
      company: "University Research Lab",
      location: "Boston, MA",
      period: "September 2022 - December 2022",
      description: [
        "Assisted in research projects related to data analysis and visualization",
        "Developed scripts for data processing and analysis using Python",
        "Created visualizations to represent research findings",
        "Contributed to research papers and presentations"
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            My professional journey includes experience in various roles, allowing me to develop a well-rounded skill set in software development.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900 transform md:translate-x-[-50%] hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`mb-12 md:flex ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } items-center opacity-0 animate-fade-in`}
              style={{ 
                animationPlayState: isVisible ? 'running' : 'paused',
                animationDelay: `${index * 0.2}s` 
              }}
            >
              <div className="md:w-1/2 p-1"></div>
              
              <div className="mx-auto md:mx-0 w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg mb-4 md:mb-0">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-white">{exp.title}</h3>
                  <h4 className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" /> {exp.period}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <MapPin size={14} className="mr-1" /> {exp.location}
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="btn btn-primary"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;