import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Dhruv Thakkar Agentic AI Expert | AI Agents & Multi-Agent Systems Specialist",
  description: "Dhruv Thakkar Agentic AI - Expert in AI Agents and Multi-Agent Systems. Dhruv Agentic AI specializes in building autonomous AI agents, agent orchestration, and intelligent agent workflows.",
  keywords: [
    "Dhruv Thakkar Agentic AI",
    "Dhruv Agentic AI",
    "Agentic AI Dhruv Thakkar",
    "AI Agents Expert",
    "Multi-Agent Systems",
    "Autonomous AI Agents",
    "Agent Orchestration",
    "AI Agent Workflows",
    "Intelligent Agents",
    "Agent-Based Systems"
  ],
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: false,
    noimageindex: false,
  },
  openGraph: {
    title: "Dhruv Thakkar Agentic AI Expert | AI Agents & Multi-Agent Systems Specialist",
    description: "Dhruv Thakkar Agentic AI - Expert in AI Agents and Multi-Agent Systems. Building autonomous AI agents and intelligent agent workflows.",
    url: "https://dhruvthakkar.vercel.app/agentic-ai"
  }
}

export default function AgenticAI() {
  return (
    <main className="bg-[#0a0118] text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          <span className="text-purple-400">Dhruv Thakkar Agentic AI</span> Expert
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
            I'm <strong>Dhruv Thakkar</strong>, also known as <strong>Dhruv Agentic AI</strong>, a leading expert in 
            <strong>Agentic AI and Multi-Agent Systems</strong>. I specialize in building autonomous AI agents that can 
            reason, plan, and execute complex tasks with minimal human intervention.
          </p>
          
          <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">Dhruv Agentic AI Expertise</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Autonomous AI Agents</strong> - Self-directed agents with reasoning and planning capabilities</li>
            <li><strong>Multi-Agent Systems</strong> - Coordinated agent networks and swarm intelligence</li>
            <li><strong>Agent Orchestration</strong> - Workflow management and agent coordination</li>
            <li><strong>Tool-Using Agents</strong> - Agents that can interact with APIs and external systems</li>
            <li><strong>Conversational Agents</strong> - Advanced chatbots and virtual assistants</li>
            <li><strong>Agent Memory Systems</strong> - Long-term and short-term memory for agents</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">Why Choose Dhruv Thakkar Agentic AI?</h2>
          <p>
            As <strong>Dhruv Agentic AI</strong>, I bring cutting-edge expertise in building intelligent agent systems 
            that can automate complex workflows, make decisions, and adapt to changing environments. My agentic AI 
            solutions are designed for reliability, scalability, and real-world deployment.
          </p>
          
          <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">Agentic AI Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-purple-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Planning & Reasoning</h3>
              <p>Agents that can break down complex tasks, create execution plans, and adapt strategies dynamically.</p>
            </div>
            <div className="bg-purple-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Tool Integration</h3>
              <p>Agents that can use external tools, APIs, and services to accomplish their objectives.</p>
            </div>
            <div className="bg-purple-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Multi-Agent Coordination</h3>
              <p>Systems where multiple agents collaborate, communicate, and coordinate to solve complex problems.</p>
            </div>
            <div className="bg-purple-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Adaptive Learning</h3>
              <p>Agents that learn from experience and improve their performance over time.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}