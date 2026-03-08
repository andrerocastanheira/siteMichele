"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, PhoneCall, MessageCircle } from "lucide-react";
import { contacto } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

export default function ContactosPage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{ background: "var(--color-surface)", paddingTop: 96, paddingBottom: 64 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              Entre em contacto
            </p>
            <h1
              className="font-cormorant text-5xl"
              style={{ color: "var(--color-dark)" }}
            >
              Contactos e Localização
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: "var(--color-bg)" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left column */}
            <motion.div {...fadeUp()} className="flex flex-col gap-8">
              <h2
                className="font-cormorant text-3xl mb-6"
                style={{ color: "var(--color-dark)" }}
              >
                Fale connosco
              </h2>

              {/* Phone */}
              <motion.div {...fadeUp(0)} className="flex items-start gap-4">
                <div
                  className="p-2 rounded-lg"
                  style={{ background: "var(--color-surface)" }}
                >
                  <PhoneCall
                    size={20}
                    style={{ color: "var(--color-gold)" }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Telefone
                  </p>
                  <p
                    className="text-lg font-medium"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {contacto.telefone}
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div {...fadeUp(1)} className="flex items-start gap-4">
                <div
                  className="p-2 rounded-lg"
                  style={{ background: "var(--color-surface)" }}
                >
                  <Mail size={20} style={{ color: "var(--color-gold)" }} />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Email
                  </p>
                  <p
                    className="text-lg font-medium"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {contacto.email}
                  </p>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div {...fadeUp(2)} className="flex items-start gap-4">
                <div
                  className="p-2 rounded-lg"
                  style={{ background: "var(--color-surface)" }}
                >
                  <MapPin size={20} style={{ color: "var(--color-gold)" }} />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Morada
                  </p>
                  <p
                    className="text-lg font-medium"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {contacto.morada}
                  </p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div {...fadeUp(3)} className="flex items-start gap-4">
                <div
                  className="p-2 rounded-lg"
                  style={{ background: "var(--color-surface)" }}
                >
                  <Clock size={20} style={{ color: "var(--color-gold)" }} />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Horário
                  </p>
                  <p
                    className="text-lg font-medium whitespace-pre-wrap"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {contacto.horario}
                  </p>
                </div>
              </motion.div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-4 flex-wrap">
                <a
                  href={`https://wa.me/${contacto.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-90"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a
                  href={`tel:${contacto.telefone}`}
                  className="border px-6 py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{
                    borderColor: "var(--color-primary)",
                    color: "var(--color-primary)",
                  }}
                >
                  Ligar
                </a>
              </div>
            </motion.div>

            {/* Right column — Map */}
            <motion.div {...fadeUp(1)}>
              <div
                className="rounded-2xl overflow-hidden border"
                style={{
                  height: 400,
                  borderColor: "var(--color-border)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24154.29497843498!2d-9.139337!3d38.716666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933a3a1dbe249%3A0xcef9e09e67ef3128!2sLisboa!5e0!3m2!1spt!2spt!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ borderRadius: 16, border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
