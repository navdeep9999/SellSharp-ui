
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);

  return (
  
             <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
            SS
          </div>
          <span className="text-xl font-semibold">SellSharp</span>
        </Link>

      
        {/* Desktop CTA */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/login"
               className="px-5 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>

          
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns={"http://www.w3.org/2000/svg"}
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col p-6 space-y-4 text-sm font-medium">
            <li><a href="#features">Features</a></li>
            <li><a href="#howitworks">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>

            <li className="pt-4 border-t">
              <Link
                to="/login"
               className="px-5 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>

             
            </li>
          </ul>
        </div>
      )}
    </header>


    
  )
}

export default Navbar
