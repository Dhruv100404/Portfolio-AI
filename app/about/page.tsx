import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Dhruv Thakkar AI | AI Engineer Biography & Expertise",
  description: "Learn about Dhruv Thakkar (Dhruv AI) - Expert AI Engineer with deep expertise in Machine Learning, Large Language Models, and RAG Systems. Discover his journey in artificial intelligence.",
  keywords: [
    "About Dhruv Thakkar",
    "Dhruv Thakkar biography",
    "Dhruv AI background",
    "Dhruv RAG expert",
    "Dhruv Agentic AI",
    "Dhruv Thakkar RAG",
    "Dhruv Thakkar Agentic AI",
    "AI Engineer experience",
    "Machine Learning expert",
    "RAG Systems expert",
    "Agentic AI specialist"
  ],
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: false,
    noimageindex: false,
  },
  openGraph: {
    title: "About Dhruv Thakkar AI | AI Engineer Biography & Expertise",
    description: "Learn about Dhruv Thakkar (Dhruv AI) - Expert AI Engineer with deep expertise in Machine Learning, Large Language Models, and RAG Systems.",
    url: "https://dhruvthakkar.vercel.app/about"
  }
}

export default function About() {
  return (
    <main className="bg-[#0a0118] text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          About <span className="text-purple-400">Dhruv Thakkar AI</span>
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
            I'm <strong>Dhruv Thakkar</strong>, also known as <strong>Dhruv AI</strong>, a passionate AI Engineer and Machine Learning Expert 
            dedicated to pushing the boundaries of artificial intelligence and creating innovative solutions that transform businesses.
          </p>
          
          <p>
            With extensive experience in <strong>Large Language Models (LLMs)</strong>, <strong>RAG Systems</strong>, and 
            <strong>Machine Learning</strong>, I specialize in developing cutting-edge AI applications that solve real-world problems.
          </p>
          
          <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">My AI Expertise</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Large Language Models (LLMs) and Natural Language Processing</li>
            <li>Retrieval-Augmented Generation (RAG) Systems</li>
            <li>Deep Learning and Neural Networks</li>
            <li>Computer Vision and Image Processing</li>
            <li>MLOps and AI System Deployment</li>
            <li>AI Research and Development</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">Why Choose Dhruv Thakkar AI?</h2>
          <p>
            As <strong>Dhruv AI</strong>, I bring a unique combination of technical expertise, innovative thinking, and practical experience 
            to every AI project. My goal is to make artificial intelligence accessible and beneficial for businesses of all sizes.
          </p>
        </div>
      </div>
    </main>
  )
}