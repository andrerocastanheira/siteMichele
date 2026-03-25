"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { contacto } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark)" }}>
      {/* Golden separator */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(to right, transparent, var(--color-gold), var(--color-gold-light), var(--color-gold), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Logo + tagline */}
        <div className="flex flex-col gap-6">
          <div>
            <p
              className="font-cormorant font-light tracking-[0.18em] text-white mb-1"
              style={{ fontSize: 22 }}
            >
              WOMAN
            </p>
            <p
              className="tracking-widest font-light"
              style={{ fontSize: 9, color: "var(--color-gold-light)", letterSpacing: "0.12em", fontFamily: "DM Sans, sans-serif" }}
            >
              INSTITUTO DE SAÚDE INTEGRATIVA
            </p>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "DM Sans, sans-serif" }}>
            Cuidados especializados de fisioterapia pélvica para a mulher em cada fase da sua vida.
            Dra. Michele Carvalho Colchete.
          </p>
          <div className="flex gap-3">
            {[
              { id: "instagram", label: "Instagram" },
              { id: "facebook", label: "Facebook" },
            ].map((rede) => (
              <a
                key={rede.id}
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.55)" }}
                aria-label={rede.label}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--color-gold)";
                  el.style.color = "white";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(255,255,255,0.2)";
                  el.style.color = "rgba(255,255,255,0.55)";
                }}
              >
                {rede.id === "instagram" ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick links */}
        <div>
          <h4
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "var(--color-gold)", fontFamily: "DM Sans, sans-serif" }}
          >
            Links Rápidos
          </h4>
          <nav className="flex flex-col gap-3">
            {[
              { href: "/", label: "Início" },
              { href: "/sobre", label: "Sobre a Dra. Michele" },
              { href: "/servicos", label: "Serviços" },
              { href: "/para-si", label: "Para Si" },
              { href: "https://wa.me/351965589127", label: "Marcar Consulta", external: true },
              { href: "/contactos", label: "Contactos" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "DM Sans, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "var(--color-gold)", fontFamily: "DM Sans, sans-serif" }}
          >
            Contacto
          </h4>
          <div className="flex flex-col gap-4">
            {[
              { icon: Phone, label: contacto.telefone },
              { icon: Mail, label: contacto.email },
              { icon: MapPin, label: contacto.morada },
              { icon: Clock, label: contacto.horario },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon size={15} strokeWidth={1.5} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 2 }} />
                <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}>
                  {label}
                </span>
              </div>
            ))}

            <a
              href={`https://wa.me/${contacto.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white w-fit"
              style={{ background: "#25D366", fontFamily: "DM Sans, sans-serif" }}
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="border-t px-6 py-6 text-center"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "DM Sans, sans-serif" }}>
          © {new Date().getFullYear()} WOMAN – Instituto de Saúde Integrativa. Dra. Michele Carvalho Colchete. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
