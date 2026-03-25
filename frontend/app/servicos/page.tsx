"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Heart,
  Star,
  Droplets,
  Sparkles,
  Baby,
  Shield,
  Sun,
  Leaf,
  Compass,
  Stethoscope,
  Users,
  Brain,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import { servicos, contacto } from "@/lib/data";
import type { Servico } from "@/lib/data";
import { fadeUp, fadeUpAnimate } from "@/lib/animations";

type IconKey =
  | "Activity"
  | "Heart"
  | "Star"
  | "Droplets"
  | "Sparkles"
  | "Baby"
  | "Shield"
  | "Sun"
  | "Leaf"
  | "Compass"
  | "Stethoscope"
  | "Users"
  | "Brain";

const iconMap: Record<IconKey, React.ComponentType<LucideProps>> = {
  Activity,
  Heart,
  Star,
  Droplets,
  Sparkles,
  Baby,
  Shield,
  Sun,
  Leaf,
  Compass,
  Stethoscope,
  Users,
  Brain,
};

interface AccordionCardProps {
  servico: Servico;
  index: number;
  openId: string | null;
  setOpenId: (id: string | null) => void;
}

function AccordionCard({ servico, index, openId, setOpenId }: AccordionCardProps) {
  const cardId = servico.id;
  const isOpen = openId === cardId;

  const iconKey = servico.icone as IconKey | undefined;
  const IconComponent = iconKey && iconKey in iconMap ? iconMap[iconKey] : Activity;

  return (
    <motion.div
      {...fadeUp(index)}
      className="bg-white border rounded-2xl overflow-hidden"
      style={{ borderColor: "var(--color-border)" }}
    >
      <button
        className="w-full flex items-center gap-4 p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{ ["--tw-ring-color" as string]: "var(--color-gold)" }}
        aria-expanded={isOpen}
        aria-controls={`accordion-body-${cardId}`}
        onClick={() => setOpenId(isOpen ? null : cardId)}
      >
        <IconComponent size={24} style={{ color: "var(--color-gold)" }} />
        <h3
          className="font-cormorant text-xl flex-1"
          style={{ color: "var(--color-dark)" }}
        >
          {servico.titulo}
        </h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={20} style={{ color: "var(--color-muted)" }} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            id={`accordion-body-${cardId}`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="text-sm leading-relaxed px-6 pb-6 pt-0"
              style={{ color: "var(--color-muted)" }}
            >
              {servico.descricaoLonga}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const categorias = [
  {
    titulo: "Fisioterapia Pélvica",
    descricao: "Avaliação e tratamento especializado do pavimento pélvico em cada fase da vida.",
    ids: [
      "avaliacao-pavimento",
      "fisioterapia-gravidez",
      "recuperacao-pos-parto",
      "incontinencia-urinaria",
      "disfuncao-sexual",
      "preparacao-parto",
      "endometriose-dor-pelvica",
      "menopausa-perimenopausa",
      "aulas-pavimento-pelvico",
    ],
  },
  {
    titulo: "Nutrição & Medicina Integrativa",
    descricao: "Uma abordagem que trata a Mulher no seu todo — corpo, ciclo hormonal e bem-estar.",
    ids: ["nutricao-integrativa", "medicina-integrativa"],
  },
  {
    titulo: "Bem-estar Mental & Emocional",
    descricao: "Ferramentas práticas para o equilíbrio emocional, o autoconhecimento e o crescimento pessoal.",
    ids: ["coaching-desenvolvimento-pessoal", "inteligencia-emocional"],
  },
];

export default function ServicosPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main>
      {/* Hero */}
      <section
        style={{ background: "var(--color-surface)", paddingTop: 96, paddingBottom: 56 }}
        className="text-center"
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp()}>
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              Os nossos serviços
            </p>
            <h1
              className="font-cormorant mb-4"
              style={{ fontSize: "clamp(40px,5vw,68px)", color: "var(--color-dark)" }}
            >
              Tratamentos Especializados
            </h1>
            <div
              style={{ width: 56, height: 2, background: "var(--color-gold)", margin: "0 auto 20px" }}
            />
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-muted)", maxWidth: 520, margin: "0 auto" }}
            >
              Fisioterapia pélvica, nutrição, coaching e medicina integrativa — a saúde da Mulher tratada por completo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services por categoria */}
      <section style={{ background: "var(--color-bg)" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-14">
          {categorias.map((cat) => {
            const items = servicos.filter((s) => cat.ids.includes(s.id));
            return (
              <div key={cat.titulo}>
                <motion.div {...fadeUp(0)} className="mb-6 flex items-center gap-4">
                  <div className="h-px w-8 flex-shrink-0" style={{ background: "var(--color-gold)" }} />
                  <p className="text-xs tracking-widest uppercase" style={{ color: "var(--color-gold)" }}>
                    {cat.titulo}
                  </p>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-6">
                  {items.map((servico, i) => (
                    <AccordionCard
                      key={servico.id}
                      servico={servico}
                      index={i}
                      openId={openId}
                      setOpenId={setOpenId}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA section */}
      <section style={{ background: "var(--color-surface)" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="font-cormorant text-4xl mb-4"
            style={{ color: "var(--color-dark)" }}
          >
            Pronta para começar?
          </h2>
          <p
            className="mb-8"
            style={{ color: "var(--color-muted)" }}
          >
            Fale connosco e descubra como podemos acompanhá-la.
          </p>
          <a
            href={`https://wa.me/${contacto.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--color-primary)" }}
          >
            <MessageCircle size={18} />
            Fale Connosco
          </a>
        </div>
      </section>
    </main>
  );
}
