import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
      <>
        <Header />
        <main>
          <section id="home" className="bg-primary">
            <Hero />
          </section>
          <section id="about" className="pt-6 pb-8 bg-primary/5">
            <div className="container mx-auto px-4">
              <About />
              </div>
          </section>
          <section id="experience" className="pt-6 pb-8">
            <div className="container mx-auto px-4">
              <Experience />
            </div>
          </section>
          <section id="skills" className="pt-6 pb-8 bg-primary/5">
            <div className="container mx-auto px-4">
              <Skills />
            </div>
          </section>
          <section id="education" className="pt-6 pb-8">
            <div className="container mx-auto px-4">
              <Education />
            </div>
          </section>
          <section id="projects" className="pt-6 pb-8 bg-primary/5">
            <div className="container mx-auto px-4">
              <Projects />
            </div>
          </section>
          {/* <section id="contact" className="pt-6 pb-8">
            <div className="container mx-auto px-4">
              <Contact />
            </div>
          </section> */}
        </main>
        <Footer />
      </>
    );
  }