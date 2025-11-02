"use client";

import { useEffect, useState } from "react";

interface StoryNavbarProps {
  items: Array<{ id: string; label: string }>;
}

export default function StoryNavbar({ items }: StoryNavbarProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => {
        const element = document.getElementById(item.id);
        return {
          id: item.id,
          element,
          top: element?.getBoundingClientRect().top || 0,
        };
      });

      const visibleSection = sections
        .filter((section) => section.element)
        .find((section) => {
          const rect = section.element?.getBoundingClientRect();
          return rect && rect.top <= 200 && rect.bottom >= 200;
        });

      if (visibleSection) {
        setActiveId(visibleSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-24 h-fit w-full max-w-[240px]">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
          Nội dung
        </h3>
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                  activeId === item.id
                    ? "bg-green-50 text-green-700 font-medium"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

