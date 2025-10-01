"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const triggerClasses = `
    relative after:content-[''] after:absolute after:bottom-0 after:left-0
    after:w-full after:h-[2px] after:bg-black
    after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left
  `;

  const menuItems = [
    { label: "About Me", id: "about" },
    { label: "Experience", id: "skills" },
    { label: "Project", id: "project" },
    { label: "Contact Me", id: "contact" }
  ];

  return (
    <nav className="py-4 fixed top-0 left-0 w-full z-50 bg-white shadow-xs">
      <div className="hidden md:flex text-xl justify-center font-semibold gap-8">
        {menuItems.map((item) => (
          <a key={item.label} href={`#${item.id}`} className={triggerClasses}>
            {item.label}
          </a>
        ))}
      </div>

      <div className="md:hidden flex justify-between items-center px-4">
        <div className="text-sm font-semibold">Faturahman Saputra</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="flex flex-col items-center py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.id}`}
                className="text-lg font-semibold text-black hover:text-gray-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;