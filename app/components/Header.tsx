import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="#projects" className="text-xl hover:text-cyan-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-xl hover:text-cyan-400 transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-xl hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

