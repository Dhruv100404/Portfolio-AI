import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Dhruv Thakkar AI | Get in Touch with AI Expert",
  description: "Contact Dhruv Thakkar (Dhruv AI) for AI consulting, RAG Systems, Agentic AI, and Machine Learning projects. Let's discuss your AI needs.",
  keywords: [
    "Contact Dhruv Thakkar",
    "Dhruv AI contact",
    "AI consulting",
    "RAG Systems consultation",
    "Agentic AI expert",
    "Machine Learning consultant"
  ],
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: false,
    noimageindex: false,
  },
  openGraph: {
    title: "Contact Dhruv Thakkar AI | Get in Touch with AI Expert",
    description: "Contact Dhruv Thakkar (Dhruv AI) for AI consulting, RAG Systems, Agentic AI, and Machine Learning projects.",
    url: "https://dhruvthakkar.vercel.app/contact"
  }
}

export default function Contact() {
  return (
    <main className="bg-[#0a0118] text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Contact <span className="text-purple-400">Dhruv Thakkar AI</span>
        </h1>
        
        {/* Hidden back to main site link */}
        <div className="mb-6">
          <a 
            href="/" 
            className="text-sm text-gray-500 hover:text-purple-400 transition-colors"
            rel="nofollow"
          >
            ← Back to Portfolio
          </a>
        </div>
        
        <div className="max-w-4xl space-y-6 text-lg leading-relaxed">
          <p>
            Ready to transform your business with AI? Get in touch with <strong>Dhruv Thakkar</strong> 
            (<strong>Dhruv AI</strong>) for expert consultation on AI projects, RAG Systems, and Agentic AI solutions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-purple-900/20 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Email</h2>
              <a 
                href="mailto:dhruvthakkar104@gmail.com"
                className="text-white hover:text-purple-400 transition-colors"
              >
                dhruvthakkar104@gmail.com
              </a>
            </div>
            
            <div className="bg-purple-900/20 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">LinkedIn</h2>
              <a 
                href="https://www.linkedin.com/in/dhruv-thakkar-2b0376219/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-purple-400 mt-12 mb-4">Services Available</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>RAG Systems Development & Implementation</li>
            <li>Agentic AI & Multi-Agent Systems</li>
            <li>Large Language Model Integration</li>
            <li>AI Consulting & Strategy</li>
            <li>Machine Learning Solutions</li>
            <li>AI System Architecture & Design</li>
          </ul>
        </div>
      </div>
    </main>
  )
}