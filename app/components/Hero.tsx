export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 glitch-text" data-text="Dhruv Thakkar">
          Dhruv Thakkar
        </h1>
        <p className="text-2xl mb-8 text-neon-pink">AI Engineer & Innovator</p>
        <a
          href="#contact"
          className="bg-neon-blue text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-neon-pink transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}

