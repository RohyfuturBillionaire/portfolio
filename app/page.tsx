export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">JOEL Rohy</div>
          <div className="hidden md:flex gap-8">
            <a href="#work" className="text-sm hover:text-red-600 transition">
              Work
            </a>
            <a href="#stack" className="text-sm hover:text-red-600 transition">
              Stack
            </a>
            <a href="#contact" className="text-sm hover:text-red-600 transition">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1">
            <div className="mb-6">
              <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                FOLIO
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              JOEL<br />Rohy
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
             A motivated and persevering young IT developer, eager to take on new challenges in order to deepen his skills in web and application development.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/rajoelina-joel-rohy-024715296/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:opacity-90 transition"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.3 2.4-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.4V24H17v-7.3c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H8V8z" />
                </svg>
                LinkedIn
              </a>

              <a
                href="https://github.com/RohyfuturBillionaire"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full font-semibold hover:opacity-90 transition"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.016-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.303-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23A11.52 11.52 0 0112 5.8c1.02.004 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.244 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.815 1.096.815 2.21 0 1.595-.014 2.878-.014 3.27 0 .322.217.7.825.582C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="flex-1">
            {/* <div className="bg-gray-100 aspect-square rounded-lg" />
          </div> */}
          <img
            src="/rohy.jpg"
            alt="Joel Rohy"
            className="w-full h-auto rounded-lg object-cover"
          />
          </div>
        </div>
      </section>

      {/* Professional Narrative */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">PROFESSIONAL NARRATIVE</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Front-End Developer Intern',
                desc: 'Assisted in building mockups and interface screens for the Moozik payment app and Developed mobile UI components using Flutter',
                company: 'NextHope Madagascar',
              },
              {
                title: 'Junior Developer',
                desc: 'Designed and developed REST APIs using Django Worked with relational database MySQL,set up and managed a private GitLab instance for source control and collaboration  and Participated in bug fixing and maintenance of existing applications',
                company: 'Innexia SARL (Hop ! Madagascar) (a Startup)',
              }
              
            ].map((item, i) => (
              <div key={i} className="pb-8 border-b-2 border-gray-200">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                <p className="text-red-600 font-semibold">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-4xl font-bold mb-12">FEATURED WORKS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'mall manager',
              image: '/mall_manager.png',
              github: 'https://github.com/RohyfuturBillionaire/m1p13mean-mamy-rohy',
              color: 'bg-gray-800',
            },
            {
              title: 'event Manager',
              image: '/event_manager.png',
              github: 'https://github.com/RohyfuturBillionaire/ticket-Manager',
              color: 'bg-gray-700',
            },
            {
              title: 'winter framework',
              image: '/winter_framework.png',
              github: 'https://github.com/RohyfuturBillionaire/framework-winter2708',
              color: 'bg-gray-600',
            },
            {
              title: 'AI\'m yours (funny hackhathon project)',
              image: '/AI.jpeg',
              github: 'https://github.com/RohyfuturBillionaire/gliStupid_onelifer',
              color: 'bg-gray-900',
            },
          ].map((project, i) => (
            <div
              key={i}
              className={`relative rounded-lg overflow-hidden cursor-pointer hover:opacity-95 transition ${project.color}`}
            >
              <div className="aspect-video w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <div>
                  <h3 className="text-white text-2xl font-semibold">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.016-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.303-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23A11.52 11.52 0 0112 5.8c1.02.004 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.244 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.815 1.096.815 2.21 0 1.595-.014 2.878-.014 3.27 0 .322.217.7.825.582C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      {/* <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-red-600 rounded-full flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">THE ANALOG FUTURIST PHILOSOPHY</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Technology should enhance human connection, not replace it. I believe in building digital experiences that feel intentional, meaningful, and grounded in human-centered design.
              </p>
              <p className="text-gray-400 text-sm">
                Every pixel matters. Every interaction counts.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Tech Stack */}
      <section id="stack" className="bg-black text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">STACK & COMPETENCY</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'LANGUAGES', items: ['JavaScript', 'TypeScript', 'Python','java','c#'] },
              { label: 'FRONTEND', items: ['React', 'Next.js','angular','react native','flutter'] },
              { label: 'BACKEND', items: ['Node.js','Django','Spring Boot','DotNet'] },
              { label: 'TOOLS', items: ['Git', 'Docker'] },
            ].map((stack, i) => (
              <div key={i}>
                <h4 className="font-bold text-sm mb-4 text-gray-400">{stack.label}</h4>
                <ul className="space-y-2">
                  {stack.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          LET'S BUILD
          <br />
          <span className="text-red-600">BETTER</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Ready to collaborate? Let's create together.
        </p>
        <a 
          href="mailto:rohyrajoelina@gmail.com"
          className="inline-block bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Start a Conversation
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
          <p>&copy; 2026 Joel Rohy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
