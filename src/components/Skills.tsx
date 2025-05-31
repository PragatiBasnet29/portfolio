import { useState, useEffect, useRef } from 'react';

const Skills = () => {
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

  const technicalSkills = [
    { name: "AWS Cloud Services", proficiency: 90 },
    { name: "Docker", proficiency: 85 },
    { name: "Kubernetes", proficiency: 80 },
    { name: "Terraform", proficiency: 85 },
    { name: "Jenkins", proficiency: 75 },
    { name: "GitLab CI/CD", proficiency: 80 },
  ];

  const devOpsTools = [
    "AWS CloudFormation",
    "AWS ECS/EKS",
    "AWS Lambda",
    "GitHub Actions",
    "Ansible",
    "Prometheus"
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Cloud & DevOps</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="stagger-item opacity-0 animate-fade-in" 
                  style={{ 
                    animationPlayState: isVisible ? 'running' : 'paused',
                    animationDelay: `${index * 0.1}s` 
                  }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.proficiency}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: isVisible ? `${skill.proficiency}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Infrastructure & Tools</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {devOpsTools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 stagger-item opacity-0 animate-fade-in"
                  style={{ animationPlayState: isVisible ? 'running' : 'paused' }}
                >
                  <span className="font-medium text-gray-800 dark:text-white">{tool}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mt-10 mb-6 text-gray-800 dark:text-white">Cloud Platforms</h3>
            
            <div className="flex flex-wrap gap-3">
              {[
                "Amazon Web Services", "Amazon VPC", "Amazon RDS", 
                "Amazon S3", "CloudWatch", "Route 53",
                "AWS IAM", "AWS EC2", "AWS CodePipeline"
              ].map((platform, index) => (
                <span 
                  key={index} 
                  className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 stagger-item opacity-0 animate-fade-in"
                  style={{ animationPlayState: isVisible ? 'running' : 'paused', animationDelay: `${0.1 * index}s` }}
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;