export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" style={{ backgroundColor: '#F2F2F2' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: '#E0E0E0' }}>
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">JOEL ROHU</div>
          <div className="hidden md:flex gap-8">
            <a href="#work" className="text-sm font-medium transition" style={{ color: '#0F7F7E' }}>
              Work
            </a>
            <a href="#stack" className="text-sm font-medium transition" style={{ color: '#0F7F7E' }}>
              Stack
            </a>
            <a href="#contact" className="text-sm font-medium transition" style={{ color: '#0F7F7E' }}>
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
              <span className="inline-block text-xs font-semibold tracking-widest" style={{ color: '#D23F3F' }}>
                DIGITAL ARCHITECT & CURATOR
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              JOEL<br />ROHU
            </h1>
            <p className="text-lg mb-8 leading-relaxed max-w-lg" style={{ color: '#666' }}>
              Bridging tactile editorial aesthetics with high-performance software engineering. Focused on intentionality, code precision, and digital minimalism.
            </p>
            <a
              href="#contact"
              className="inline-block text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: '#D23F3F' }}
            >
              SCROLL TO EXPLORE THE ENGINEER
            </a>
          </div>
          <div className="flex-1">
            <div className="rounded-full w-24 h-24 flex items-center justify-center" style={{ backgroundColor: '#D23F3F' }}>
              <span className="text-white text-sm font-bold">RK</span>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Narrative */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F2F2F2' }}>
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
              <div key={i} className="pb-8" style={{ borderBottom: `2px solid #E0E0E0` }}>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="leading-relaxed" style={{ color: '#666' }}>{item.desc}</p>
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
            { title: 'Project One', color: '#2A2A2A' },
            { title: 'Project Two', color: '#3A3A3A' },
            { title: 'Project Three', color: '#4A4A4A' },
            { title: 'Project Four', color: '#1A1A1A' },
          ].map((project, i) => (
            <div
              key={i}
              className="aspect-video rounded-lg cursor-pointer hover:opacity-90 transition flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <span className="text-white text-2xl font-semibold opacity-50">
                {project.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="text-white py-16 md:py-24" style={{ backgroundColor: '#0F7F7E' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full flex-shrink-0" style={{ backgroundColor: '#D23F3F' }} />
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">THE ANALOG FUTURIST PHILOSOPHY</h3>
              <p className="leading-relaxed mb-4 opacity-90">
                Technology should enhance human connection, not replace it. I believe in building digital experiences that feel intentional, meaningful, and grounded in human-centered design.
              </p>
              <p className="text-sm opacity-75">
                Every pixel matters. Every interaction counts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="text-white py-16 md:py-24" style={{ backgroundColor: '#1A1A1A' }}>
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
                <h4 className="font-bold text-sm mb-4 opacity-60">{stack.label}</h4>
                <ul className="space-y-2">
                  {stack.items.map((item, j) => (
                    <li key={j} className="text-sm opacity-80">
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
          <span style={{ color: '#D23F3F' }}>BETTER</span>
        </h2>
        <p className="mb-8 max-w-2xl mx-auto" style={{ color: '#666' }}>
          Ready to collaborate? Let's create something amazing together.
        </p>
        <button className="text-white px-10 py-4 rounded-full font-semibold hover:opacity-90 transition" style={{ backgroundColor: '#D23F3F' }}>
          Start a Conversation
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t py-8" style={{ backgroundColor: '#F2F2F2', borderColor: '#E0E0E0' }}>
        <div className="max-w-6xl mx-auto px-6 text-center text-sm" style={{ color: '#999' }}>
          <p>&copy; 2026 Joel Rohu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
