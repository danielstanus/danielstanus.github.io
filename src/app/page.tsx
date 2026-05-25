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
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
    return (
      <>
        <Header />
        <main role="main">
          <section id="home" className="bg-primary" aria-label="Presentación principal">
            <Hero />
          </section>
          <section id="about" className="pt-6 pb-8 bg-primary/5" aria-label="Acerca de mí">
            <div className="container mx-auto px-4">
              <ScrollReveal variant="slideUp" delay={0.1}>
                <About />
              </ScrollReveal>
            </div>
          </section>
          <section id="experience" className="pt-6 pb-8" aria-label="Experiencia profesional">
            <div className="container mx-auto px-4">
              <ScrollReveal variant="slideUp" delay={0.1}>
                <Experience />
              </ScrollReveal>
            </div>
          </section>
          <section id="skills" className="pt-6 pb-8 bg-primary/5" aria-label="Habilidades técnicas">
            <div className="container mx-auto px-4">
              <ScrollReveal variant="slideUp" delay={0.1}>
                <Skills />
              </ScrollReveal>
            </div>
          </section>
          <section id="education" className="pt-6 pb-8" aria-label="Formación académica">
            <div className="container mx-auto px-4">
              <ScrollReveal variant="slideUp" delay={0.1}>
                <Education />
              </ScrollReveal>
            </div>
          </section>
          <section id="projects" className="pt-6 pb-8 bg-primary/5" aria-label="Proyectos realizados">
            <div className="container mx-auto px-4">
              <ScrollReveal variant="slideUp" delay={0.1}>
                <Projects />
              </ScrollReveal>
            </div>
          </section>
          <section id="contact" className="pt-6 pb-8" aria-label="Información de contacto">
            <div className="container mx-auto px-4">
              <ScrollReveal variant="slideUp" delay={0.1}>
                <Contact />
              </ScrollReveal>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }