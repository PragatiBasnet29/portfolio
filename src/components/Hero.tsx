import { Github as GitHub, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center z-10">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
            Pragati Basnet
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            I'm a dedicated developer with a passion for creating impactful digital solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#contact" 
            className="btn btn-primary"
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="btn btn-secondary"
          >
            View My Work
          </a>
        </div>

        <div className="flex space-x-6 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <a 
            href="mailto:pragatibasnet123@gmail.com" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/pragati-basnet-573106263" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/PragatiBasnet29" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <GitHub size={24} />
          </a>
        </div>

        <a 
          href="#about" 
          className="absolute bottom-10 animate-bounce text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;