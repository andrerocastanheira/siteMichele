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
        className="w-full flex items-center gap-4 p-6 text-left"
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
        className="relative overflow-hidden"
        style={{ height: "60vh", minHeight: 480 }}
      >
        <Image
          src="/images/sala-tratamento.svg"
          alt="Sala de tratamento"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(44, 26, 14, 0.65)" }}
        />
        <div className="relative z-10 pt-32 pb-16 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <motion.p
            {...fadeUpAnimate(0)}
            className="text-xs tracking-widest mb-3"
            style={{ color: "var(--color-gold-light)" }}
          >
            OS NOSSOS SERVIÇOS
          </motion.p>
          <motion.h1
            {...fadeUpAnimate(1)}
            className="font-cormorant text-white"
            style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
          >
            Tratamentos Especializados
          </motion.h1>
          <motion.p
            {...fadeUpAnimate(2)}
            className="text-lg max-w-xl mt-4"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Fisioterapia pélvica, nutrição, coaching e medicina integrativa — a saúde da Mulher tratada por completo.
          </motion.p>
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
