import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Dhruv Thakkar RAG Systems Expert | Retrieval-Augmented Generation Specialist",
  description: "Dhruv Thakkar RAG - Expert in RAG Systems and Retrieval-Augmented Generation. Dhruv RAG specializes in building advanced RAG architectures, vector databases, and intelligent document retrieval systems.",
  keywords: [
    "Dhruv Thakkar RAG",
    "Dhruv RAG",
    "RAG Systems Dhruv Thakkar",
    "Retrieval-Augmented Generation",
    "RAG Expert",
    "Vector Databases",
    "Document Retrieval",
    "RAG Architecture",
    "Semantic Search",
    "Knowledge Retrieval"
  ],
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: false,
    noimageindex: false,
  },
  openGraph: {
    title: "Dhruv Thakkar RAG Systems Expert | Retrieval-Augmented Generation Specialist",
    description: "Dhruv Thakkar RAG - Expert in RAG Systems and Retrieval-Augmented Generation. Building advanced RAG architectures and intelligent document retrieval systems.",
    url: "https://dhruvthakkar.vercel.app/rag-systems"
  }
}

export default function RAGSystems() {
  return (
    <main className="bg-[#0a0118] text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          <span className="text-purple-400">Dhruv Thakkar RAG</span> Systems Expert
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
            I'm <strong>Dhruv Thakkar</strong>, also known as <strong>Dhruv RAG</strong>, a leading expert in 
            <strong>Retrieval-Augmented Generation (RAG) Systems</strong>. I specialize in building sophisticated 
            RAG architectures that combine the power of large language models with intelligent document retrieval.
          </p>
          
          <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">Dhruv RAG Expertise</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Advanced RAG Architectures</strong> - Custom RAG system design and implementation</li>
            <li><strong>Vector Databases</strong> - Pinecone, Weaviate, Chroma, and FAISS integration</li>
            <li><strong>Semantic Search</strong> - Embedding models and similarity search optimization</li>
            <li><strong>Document Processing</strong> - Intelligent chunking and preprocessing pipelines</li>
            <li><strong>Multi-Modal RAG</strong> - Text, image, and audio retrieval systems</li>
            <li><strong>RAG Evaluation</strong> - Metrics and benchmarking for RAG performance</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">Why Choose Dhruv Thakkar RAG?</h2>
          <p>
            As <strong>Dhruv RAG</strong>, I bring deep expertise in building production-ready RAG systems that 
            deliver accurate, contextual, and reliable responses. My RAG solutions are optimized for performance, 
            scalability, and cost-effectiveness.
          </p>
          
          <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">RAG System Components</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-purple-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Retrieval Pipeline</h3>
              <p>Advanced document retrieval with semantic search, hybrid search, and re-ranking algorithms.</p>
            </div>
            <div className="bg-purple-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Generation Pipeline</h3>
              <p>LLM integration with context injection, prompt engineering, and response optimization.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}