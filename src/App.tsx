import { Github, Twitter } from 'lucide-react'
import './App.css'
import moduloxLogo from './assets/modulox-logo.png'
import { Input } from "@/components/ui/input"

function App() {
  return (
    <div className="fixed inset-0 min-h-screen w-full bg-black overflow-hidden">
      {/* Social Links */}
      <div className="fixed right-4 top-4 flex gap-4 z-10">
        <a
          href="https://github.com/moduloxai/ModuloX"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Github size={32} />
        </a>
        <a
          href="https://x.com/ModuloX_ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Twitter size={32} />
        </a>
      </div>

      {/* Main Content */}
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-8">
          <img 
            src={moduloxLogo}
            alt="ModuloX Logo"
            className="mb-8 w-64 md:w-96"
          />
          {/* Readonly Text Box */}
          <Input
            type="text"
            readOnly
            value="CA:DhNxq6MSvdwG2ttzKwdeQuPjGvqxYw9HRw7etHJLBcTW"
            className="w-96 bg-gray-800 text-center text-white border-gray-700"
          />
        </div>
      </div>
    </div>
  )
}

export default App
