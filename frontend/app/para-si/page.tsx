"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { paraSi } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

export default function ParaSiPage() {
  return (
    <main>
      {/* Hero simple */}
      <section
        style={{ background: "var(--color-surface)" }}
        className="pt-32 pb-16"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              Cuidados especializados
            </p>
            <h1
              className="font-cormorant text-5xl"
              style={{ color: "var(--color-dark)" }}
            >
              Para si, em cada fase da vida
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto mt-4"
              style={{ color: "var(--color-muted)" }}
            >
              Descubra como a fisioterapia pélvica pode transformar o seu
              bem-estar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4 alternating sections */}
      {paraSi.map((item, index) => {
        const isEven = index % 2 === 0;
        const bg = isEven ? "var(--color-bg)" : "var(--color-surface)";

        return (
          <section key={item.titulo ?? index} style={{ background: bg }} className="py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <motion.div
                  {...fadeUp(0)}
                  className={isEven ? "order-first" : "order-first lg:order-last"}
                >
                  <div
                    className="relative w-full rounded-2xl overflow-hidden"
                    style={{
                      aspectRatio: "4/3",
                      boxShadow: "0 16px 48px rgba(44,26,14,0.12)",
                    }}
                  >
                    <Image
                      src={item.imagem}
                      alt={item.titulo}
                      fill
                      priority={index === 0}
                      loading={index === 0 ? undefined : "lazy"}
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  {...fadeUp(1)}
                  className={isEven ? "" : "order-last lg:order-first"}
                >
                  <p
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {item.titulo}
                  </p>
                  <h2
                    className="font-cormorant mb-3"
                    style={{
                      color: "var(--color-dark)",
                      fontSize: "clamp(32px, 4vw, 52px)",
                    }}
                  >
                    {item.subtitulo}
                  </h2>
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {item.descricao}
                  </p>

                  {item.sintomas && item.sintomas.length > 0 && (
                    <ul className="flex flex-col gap-2 mb-8">
                      {item.sintomas.map((sintoma, si) => (
                        <li key={si} className="flex gap-2 items-start">
                          <CheckCircle
                            size={16}
                            className="mt-0.5 shrink-0"
                            style={{ color: "var(--color-gold)" }}
                          />
                          <span
                            className="text-sm"
                            style={{ color: "var(--color-dark)" }}
                          >
                            {sintoma}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    href="https://wa.me/351965589127"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ background: "var(--color-primary)" }}
                  >
                    Marcar Consulta
                    <ArrowRight size={16} />
                  </a>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
