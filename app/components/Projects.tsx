export default function Projects() {
  const projects = [
    {
      title: "Enterprise RAG System",
      description: "Built a production-grade RAG system using LangChain, FastAPI, and Vector Databases with 95% accuracy",
      tech: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI"]
    },
    {
      title: "LLM Fine-tuning Pipeline",
      description: "Developed automated pipeline for fine-tuning LLMs using PEFT/LoRA techniques",
      tech: ["PyTorch", "Hugging Face", "AWS SageMaker", "MLflow"]
    },
    {
      title: "AI Document Processor",
      description: "Created scalable system for processing and analyzing documents using LLMs",
      tech: ["Python", "Langchain", "OCR", "SpaCy", "MongoDB"]
    },
  ]

  return (
    <section id="projects" className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-gray-900 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

