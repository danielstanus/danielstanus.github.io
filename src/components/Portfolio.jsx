import React, { useState, useEffect } from 'react';
import { Mail, Phone, Globe, Github, Linkedin, Sun, Moon } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved user preference, default to light mode
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    // Update the HTML class when theme changes
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      {/* Theme Toggle Button - Fixed position */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="text-yellow-500" size={24} /> : <Moon className="text-gray-700" size={24} />}
      </button>

      {/* Header/Hero Section */}
      <header className={`${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white py-16 transition-colors`}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Daniel Calin Stanus</h1>
          <h2 className="text-2xl mb-6">Full Stack Developer</h2>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:stanusdaniel@gmail.com" className="flex items-center gap-2 hover:text-blue-200">
              <Mail size={20} />
              stanusdaniel@gmail.com
            </a>
            <a href="tel:+34601602163" className="flex items-center gap-2 hover:text-blue-200">
              <Phone size={20} />
              +34 601 602 163
            </a>
            <a href="https://danielstanus.github.io" className="flex items-center gap-2 hover:text-blue-200">
              <Globe size={20} />
              danielstanus.github.io
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Professional Profile */}
        <section className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow-md p-6 mb-8 transition-colors`}>
          <h2 className="text-2xl font-bold mb-4">Professional Profile</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Full Stack Developer with over 8 years of experience specializing in .NET, PHP, React, and Angular technologies. 
            Expert in enterprise web application development and cross-platform solutions. Strong experience in implementing 
            scalable architectures using C#, PHP, and JS/TS. Creator of multiple successfully published mobile applications 
            on Google Play Store and developer of various high-performance websites.
          </p>
        </section>

        {/* Work Experience */}
        <section className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow-md p-6 mb-8 transition-colors`}>
          <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Head of IT Department</h3>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>OnVentanas, Madrid | 2022 - Present</div>
            <ul className={`list-disc ml-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Developed mobile applications with Ionic to optimize internal processes</li>
              <li>Created C# .NET APIs, including a specific API for factory warehouse management</li>
              <li>Developed a C# library for PrefGest, the company's primary software</li>
              <li>Implemented machinery integrations using XSLT</li>
              <li>Maintained and improved the company's CRM and other internal applications</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>TPF Ingeniería, Madrid | 2020 - 2022</div>
            <ul className={`list-disc ml-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Maintained and developed modules for the company's internal website</li>
              <li>Migrated a Visual Basic 6.0 application to C#</li>
              <li>Developed and optimized modules in PHP and C#</li>
              <li>Created management reports using various technologies</li>
            </ul>
          </div>

          {/* Similar pattern for other sections */}
        </section>

        {/* Skills */}
        <section className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow-md p-6 mb-8 transition-colors`}>
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['C#', 'Python', 'Java', 'Kotlin', 'Swift', 'JavaScript', 'TypeScript', 'PHP'].map(skill => (
                  <span key={skill} className={`${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['.NET', 'React', 'Angular', 'Ionic', 'Express', 'ASP.NET'].map(skill => (
                  <span key={skill} className={`${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'} px-3 py-1 rounded-full`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow-md p-6 mb-8 transition-colors`}>
          <h2 className="text-2xl font-bold mb-4">Languages</h2>
          <div className="flex flex-wrap gap-4">
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} px-4 py-2 rounded-lg`}>
              <span className="font-semibold">Spanish:</span> Native
            </div>
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} px-4 py-2 rounded-lg`}>
              <span className="font-semibold">English:</span> Intermediate
            </div>
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} px-4 py-2 rounded-lg`}>
              <span className="font-semibold">Romanian:</span> Native
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white py-8 transition-colors`}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://github.com/danielstanus" className="hover:text-blue-400">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/daniel-stanus" className="hover:text-blue-400">
              <Linkedin size={24} />
            </a>
          </div>
          <p>© 2024 Daniel Calin Stanus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;