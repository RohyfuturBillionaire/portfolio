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
              A passionate engineer with a keen eye for beautiful, functional design. I transform complex problems into elegant solutions.
            </p>
            <a
              href="#contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Get in touch
            </a>
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 aspect-square rounded-lg" />
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
                title: 'Principal Systems Engineer',
                desc: 'Led architecture decisions and mentored teams of developers in building scalable systems.',
              },
              {
                title: 'Principal Software Curator',
                desc: 'Curated and refined software practices, ensuring quality and consistency across projects.',
              },
              {
                title: 'Interaction Developer',
                desc: 'Designed and implemented engaging user interactions with focus on performance and accessibility.',
              },
            ].map((item, i) => (
              <div key={i} className="pb-8 border-b-2 border-gray-200">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
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
            { title: 'Project One', color: 'bg-gray-800' },
            { title: 'Project Two', color: 'bg-gray-700' },
            { title: 'Project Three', color: 'bg-gray-600' },
            { title: 'Project Four', color: 'bg-gray-900' },
          ].map((project, i) => (
            <div
              key={i}
              className={`${project.color} aspect-video rounded-lg cursor-pointer hover:opacity-90 transition flex items-center justify-center`}
            >
              <span className="text-white text-2xl font-semibold opacity-50">
                {project.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
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
      </section>

      {/* Tech Stack */}
      <section id="stack" className="bg-black text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">STACK & COMPETENCY</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'LANGUAGES', items: ['JavaScript', 'TypeScript', 'Python'] },
              { label: 'FRONTEND', items: ['React', 'Next.js', 'Tailwind CSS'] },
              { label: 'BACKEND', items: ['Node.js', 'Express', 'PostgreSQL'] },
              { label: 'TOOLS', items: ['Git', 'Docker', 'AWS'] },
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
          Ready to collaborate? Let's create something amazing together.
        </p>
        <button className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition">
          Start a Conversation
        </button>
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
