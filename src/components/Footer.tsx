import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Pragati Basnet</h3>
            <p className="text-gray-400 mb-4 md:mb-0">
              Software Developer | Problem Solver | Lifelong Learner
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:pragatibasnet123@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/pragati-basnet-573106263" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/PragatiBasnet29" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pragati Basnet. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> using React & TailwindCSS
          </p>
        </div>
      </div>
      
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <button
            onClick={scrollToTop}
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <span className="mr-2">Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;