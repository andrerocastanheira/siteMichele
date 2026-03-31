"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { especialidades, formacoes, metricas } from "@/lib/data";
import { fadeUp, fadeUpAnimate } from "@/lib/animations";

export default function SobrePage() {
  const [cvAberto, setCvAberto] = useState(false);

  return (
    <main>
      {/* Hero section */}
      <section style={{ background: "var(--color-bg)", paddingTop: 96 }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div {...fadeUpAnimate(0)}>
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              Dra. Michele Carvalho Colchete
            </p>
            <h1
              className="font-cormorant mb-4"
              style={{
                color: "var(--color-dark)",
                fontSize: "clamp(40px, 5vw, 72px)",
              }}
            >
              Especialista em Saúde Pélvica Feminina
            </h1>
            <div
              className="mb-6"
              style={{
                width: 64,
                height: 2,
                background: "var(--color-gold)",
              }}
            />
            <p
              className="font-cormorant italic text-xl leading-relaxed mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              «Acredito que cada mulher merece ser ouvida, compreendida e
              tratada com o respeito que a sua saúde exige.»
            </p>
            <div className="flex flex-wrap gap-2">
              {["CREFITO Certificada", "Membro APA", "10+ Anos Experiência"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="border rounded-full px-3 py-1 text-xs"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-muted)",
                    }}
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div {...fadeUpAnimate(1)}>
            <div className="relative">
              {/* Decorative gold frame offset */}
              <div
                className="absolute rounded-2xl"
                style={{
                  inset: 0,
                  top: 16,
                  left: 16,
                  background: "var(--color-gold)",
                  opacity: 0.18,
                  zIndex: 0,
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: "4/5",
                  maxHeight: 560,
                  boxShadow: "0 32px 80px rgba(44,26,14,0.18)",
                  zIndex: 1,
                }}
              >
                <Image
                  src="/images/doutora-coluna.png"
                  alt="Dra. Michele Carvalho Colchete"
                  fill
                  priority
                  className="object-cover object-top"
                />
                {/* Gold accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: "var(--color-gold)" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio section */}
      <section style={{ background: "var(--color-surface)" }} className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp()}>
            <p
              className="text-xs tracking-widest uppercase mb-2"
              style={{ color: "var(--color-gold)" }}
            >
              A minha história
            </p>
            <h2
              className="font-cormorant text-4xl mb-6"
              style={{ color: "var(--color-dark)" }}
            >
              Porquê a Saúde da Mulher
            </h2>

            {/* Resumo curto */}
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-muted)", lineHeight: 1.8 }}
            >
              Sou Mulher, Esposa, Mãe e Fisioterapeuta. Há mais de 10 anos que
              trabalho na Saúde da Mulher — acompanhando mulheres em cada fase
              da vida, com especial foco nas questões que mais afetam o
              bem-estar, a autoestima e a intimidade feminina.
            </p>
            <p
              className="font-cormorant italic text-xl leading-relaxed mb-8"
              style={{ color: "var(--color-primary)", lineHeight: 1.7 }}
            >
              Se sentes que algo não está bem, não tens de viver assim — há
              caminho, há solução e há apoio para ti.
            </p>

            {/* 3 áreas de especialização */}
            <ul className="flex flex-col gap-3 mb-10">
              {especialidades.map((esp, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--color-gold)" }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--color-dark)", lineHeight: 1.7 }}
                  >
                    {esp}
                  </span>
                </li>
              ))}
            </ul>

            {/* Acordeão — Currículo completo */}
            <div
              className="rounded-lg border overflow-hidden"
              style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
            >
              {/* Trigger */}
              <button
                onClick={() => setCvAberto(!cvAberto)}
                className="w-full flex items-center justify-between px-5 py-4 transition-colors hover:bg-[var(--color-surface-dark)]"
                style={{ background: "var(--color-bg)" }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-dark)", fontFamily: "DM Sans, sans-serif" }}
                >
                  {cvAberto ? "Ocultar currículo" : "Ver currículo completo"}
                </span>
                {cvAberto
                  ? <ChevronUp size={16} style={{ color: "var(--color-primary)" }} />
                  : <ChevronDown size={16} style={{ color: "var(--color-primary)" }} />
                }
              </button>

              {/* Conteúdo expandido */}
              <AnimatePresence initial={false}>
                {cvAberto && (
                  <motion.div
                    key="cv-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="px-5 py-4 overflow-y-auto"
                      style={{
                        maxHeight: "clamp(250px, 40vh, 300px)",
                        borderTop: "1px solid var(--color-border)",
                      }}
                    >
                      <ul className="flex flex-col gap-2.5">
                        {formacoes.map((f, i) => (
                          <li key={i} className="flex gap-3 items-start">
                            <span
                              className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
                              style={{ background: "var(--color-gold)", opacity: 0.7 }}
                            />
                            <span
                              className="text-xs leading-relaxed"
                              style={{ color: "var(--color-muted)", lineHeight: 1.7, fontFamily: "DM Sans, sans-serif" }}
                            >
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Numbers section */}
      <section style={{ background: "var(--color-primary)" }} className="py-20">
        <div className="max-w-3xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
              {metricas.map((m, i) => (
                <motion.div key={i} {...fadeUp(i)}>
                  <h3
                    className="font-cormorant text-white mb-2"
                    style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
                  >
                    {m.valor}
                  </h3>
                  <p
                    className="text-sm tracking-widest uppercase"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>
    </main>
  );
}
