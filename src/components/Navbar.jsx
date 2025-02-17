import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            Madhvi <span className="text-blue-500">Pandey</span>{" "}
          </a>

          <div
            className="w-8 h-6 relative cursor-pointer z-40 md:hidden flex flex-col justify-between items-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="block w-full h-[3px] bg-white mb-[2px]"></span>
            <span className="block w-full h-[3px] bg-white mb-[2px]"></span>
            <span className="block w-full h-[3px] bg-white"></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#artworks"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Artworks{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
