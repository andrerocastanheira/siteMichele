"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/para-si", label: "Para Si" },
  { href: "/contactos", label: "Contactos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomepage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = !isHomepage || scrolled;

  const logoColor = "var(--color-dark)";
  const logoSubColor = "var(--color-gold)";

  return (
    <motion.header
      className="fixed left-0 right-0 z-50"
      animate={{
        top: scrolled ? 0 : 32,
        backgroundColor: isSolid ? "rgba(250,247,244,0.97)" : "rgba(250,247,244,0)",
        boxShadow: isSolid ? "0 1px 24px rgba(44,26,14,0.08)" : "none",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start leading-none">
          <span
            className="font-cormorant font-light tracking-[0.18em]"
            style={{ fontSize: 22, color: logoColor, letterSpacing: "0.18em" }}
          >
            WOMAN
          </span>
          <span
            className="text-xs whitespace-nowrap"
            style={{ fontSize: 11, fontWeight: 700, color: logoSubColor, letterSpacing: "0.1em", fontFamily: "DM Sans, sans-serif", textShadow: "0 0 8px rgba(250,247,244,1), 0 0 16px rgba(250,247,244,0.9)" }}
          >
            INSTITUTO DE SAÚDE INTEGRATIVA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.div key={link.href} className="relative">
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive ? "var(--color-primary)" : "var(--color-dark)",
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: 13,
                  }}
                >
                  {link.label}
                </Link>
                <motion.span
                  className="absolute -bottom-1 left-0 h-px"
                  style={{ background: "var(--color-primary)" }}
                  initial={{ width: isActive ? "100%" : "0%" }}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contactos"
              className="px-5 py-2.5 rounded-md text-sm font-semibold text-white"
              style={{ background: "var(--color-primary)", fontFamily: "DM Sans, sans-serif", fontSize: 13 }}
            >
              Fale Connosco
            </Link>
          </motion.div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu de navegação"
        >
          {menuOpen ? (
            <X size={22} color="var(--color-dark)" />
          ) : (
            <Menu size={22} color="var(--color-dark)" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t"
            style={{ background: "var(--color-bg)", borderColor: "var(--color-border)" }}
          >
            <nav className="flex flex-col p-4 gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-md text-sm font-medium"
                  style={{
                    color: pathname === link.href ? "var(--color-primary)" : "var(--color-dark)",
                    background: pathname === link.href ? "var(--color-surface)" : "transparent",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contactos"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3 rounded-md text-sm font-semibold text-white text-center"
                style={{ background: "var(--color-primary)", fontFamily: "DM Sans, sans-serif" }}
              >
                Fale Connosco
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
