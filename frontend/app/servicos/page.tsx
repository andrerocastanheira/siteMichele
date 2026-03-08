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
  ChevronDown,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import { servicos } from "@/lib/data";
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
  | "Sun";

const iconMap: Record<IconKey, React.ComponentType<LucideProps>> = {
  Activity,
  Heart,
  Star,
  Droplets,
  Sparkles,
  Baby,
  Shield,
  Sun,
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
            Uma abordagem completa e personalizada para cada condição.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: "var(--color-bg)" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {servicos.map((servico, i) => (
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
            Marque a sua primeira consulta e dê o primeiro passo.
          </p>
          <Link
            href="/agendamento"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--color-primary)" }}
          >
            Marcar Consulta
          </Link>
        </div>
      </section>
    </main>
  );
}
