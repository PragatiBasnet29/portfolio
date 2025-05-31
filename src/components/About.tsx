const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Professional headshot" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Hello! I'm Pragati
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a dedicated developer with a passion for building innovative software solutions. 
              My journey in technology has equipped me with a diverse skill set and a strong 
              foundation in both front-end and back-end development.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I specialize in creating responsive, user-friendly applications that solve real-world 
              problems. With keen attention to detail and a commitment to writing clean, maintainable 
              code, I strive to deliver high-quality products that exceed expectations.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When I'm not coding, I enjoy expanding my knowledge through online courses and 
              contributing to open-source projects. I'm always looking for new challenges and 
              opportunities to grow as a developer.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="btn btn-primary"
              >
                Contact Me
              </a>
              <a 
                href="#skills" 
                className="btn btn-secondary"
              >
                My Skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;