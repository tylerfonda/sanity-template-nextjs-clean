import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="A Dream Factory" 
              width={120} 
              height={40}
              priority
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#services" 
              className="uppercase text-sm font-medium tracking-wide hover:text-hot-pink transition-colors relative group"
            >
              'A' Studio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hot-pink group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#services" 
              className="uppercase text-sm font-medium tracking-wide hover:text-hot-pink transition-colors relative group"
            >
              Collaboration
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hot-pink group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#services" 
              className="uppercase text-sm font-medium tracking-wide hover:text-hot-pink transition-colors relative group"
            >
              Taste
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hot-pink group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#team" 
              className="uppercase text-sm font-medium tracking-wide hover:text-hot-pink transition-colors relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hot-pink group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#contact" 
              className="uppercase text-sm font-medium tracking-wide hover:text-hot-pink transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hot-pink group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
