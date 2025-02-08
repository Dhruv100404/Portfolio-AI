export default function Education() {
  const education = [
    {
      degree: "Master's in Artificial Intelligence",
      institution: "Stanford University",
      year: "2020 - 2022",
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "MIT",
      year: "2016 - 2020",
    },
  ]

  return (
    <section id="education" className="my-16">
      <h2 className="text-4xl font-bold mb-8 text-center glitch-text" data-text="Education">
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <div key={index} className="glassmorphism p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-neon-pink">{edu.degree}</h3>
            <p className="text-neon-blue">{edu.institution}</p>
            <p className="text-sm text-neon-green">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

