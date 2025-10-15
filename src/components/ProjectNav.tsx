"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface ProjectNavItem {
  label: string;
  href: string;
}

interface ProjectNavProps {
  items: ProjectNavItem[];
}

const SCROLL_OFFSET = 140;

export default function ProjectNav({ items }: ProjectNavProps) {
  const [activeSection, setActiveSection] = useState<string>(
    items[0]?.href ?? "",
  );

  const sectionIds = useMemo(
    () => items.map((item) => item.href).filter(Boolean),
    [items],
  );

  useEffect(() => {
    if (sectionIds.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${SCROLL_OFFSET}px 0px -60% 0px`,
        threshold: 0.2,
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - (SCROLL_OFFSET - 16),
        behavior: "smooth",
      });
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-16 z-40 border-b border-gray-200 bg-white/95 backdrop-blur transition-all duration-200 lg:top-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-4 overflow-x-auto py-4 text-sm font-semibold text-gray-600">
          {items.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <motion.button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={`relative whitespace-nowrap rounded-full px-3 py-1.5 transition-colors duration-200 ${
                  isActive
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {item.label}
              </motion.button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
