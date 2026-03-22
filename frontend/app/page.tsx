"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Sparkles,
  Baby,
  Sun,
  Activity,
  CheckCircle,
  MessageCircle,
  Flower2,
  Leaf,
  Compass,
} from "lucide-react";
import { servicosPreview, testemunhos, contacto } from "@/lib/data";
import { fadeUp, fadeUpAnimate } from "@/lib/animations";

export default function HomePage() {
  return (
    <main>
      {/* Section 1 — Hero Fullscreen */}
      <section
        style={{ height: "100vh", minHeight: 640 }}
        className="relative overflow-hidden"
      >
        <Image
          src="/images/sala-tratamento-premium.png"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(44, 26, 14, 0.55)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-start sm:justify-center h-full pt-32 sm:pt-0">
          <motion.p
            {...fadeUpAnimate(0)}
            className="italic tracking-widest text-xs mb-3 sm:mb-4"
            style={{ color: "var(--color-gold-light)" }}
          >
            SAÚDE INTEGRATIVA DA MULHER
          </motion.p>
          <motion.h1
            {...fadeUpAnimate(1)}
            className="font-cormorant text-white max-w-3xl mb-3 sm:mb-4"
            style={{ fontSize: "clamp(24px, 4.5vw, 60px)", lineHeight: 1.15, fontWeight: 300 }}
          >
            Muitas Mulheres vivem anos com sintomas que não deveriam ser considerados normais.
          </motion.h1>
          <motion.p
            {...fadeUpAnimate(2)}
            className="text-sm sm:text-base max-w-xl mb-4 sm:mb-6"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Na WOMAN, olhamos para a saúde da Mulher como um todo — corpo, mente e emoção.
          </motion.p>
          {/* Service chips — first fold */}
          <motion.div
            {...fadeUpAnimate(3)}
            className="flex flex-wrap gap-2"
          >
            {["Saúde Pélvica", "Nutrição", "Coaching", "Inteligência Emocional", "Medicina Integrativa"].map((label) => (
              <span
                key={label}
                className="text-xs px-3 py-1.5 rounded-full border"
                style={{
                  borderColor: "rgba(212,175,106,0.7)",
                  color: "var(--color-gold-light)",
                  background: "rgba(44,26,14,0.4)",
                  backdropFilter: "blur(8px)",
                  letterSpacing: "0.04em",
                }}
              >
                {label}
              </span>
            ))
            }
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Apresentação */}
      <section style={{ background: "var(--color-bg)" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp()}>
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              Sobre a Dra. Michele
            </p>
            <h2
              className="font-cormorant mb-4"
              style={{
                color: "var(--color-dark)",
                fontSize: "clamp(36px, 4vw, 56px)",
              }}
            >
              Uma especialista que a compreende
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--color-muted)" }}
            >
              Com mais de 12 anos de experiência em Fisioterapia Pélvica, a Dra.
              Michele Carvalho Colchete oferece um cuidado verdadeiramente
              personalizado. A sua abordagem integrativa combina técnica rigorosa
              com escuta ativa, criando um espaço seguro para cada mulher.
            </p>
            <Link
              href="/sobre"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--color-primary)" }}
            >
              Conhecer a minha história →
            </Link>
          </motion.div>
          <motion.div {...fadeUp(1)}>
            <Image
              src="/images/doutora-coluna.png"
              alt="Dra. Michele Carvalho Colchete"
              width={480}
              height={600}
              className="object-cover rounded-2xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Para Quem É */}
      <section style={{ background: "var(--color-surface)" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-widest mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              Para si, em cada fase da vida
            </p>
            <h2
              className="font-cormorant text-5xl"
              style={{ color: "var(--color-dark)" }}
            >
              Cada fase tem o seu cuidado
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              {
                icon: <Flower2 size={32} style={{ color: "var(--color-gold)" }} />,
                title: "Na Adolescência",
                desc: "Um início consciente para a saúde feminina — cólicas, ciclo menstrual, educação corporal e prevenção desde cedo.",
              },
              {
                icon: <Baby size={32} style={{ color: "var(--color-gold)" }} />,
                title: "Na Gravidez",
                desc: "Acompanhamento especializado para prevenir dores, preparar o corpo e garantir uma gravidez saudável.",
              },
              {
                icon: <Heart size={32} style={{ color: "var(--color-gold)" }} />,
                title: "No Pós-Parto",
                desc: "Recuperação segura do pavimento pélvico, tratamento de diástase e retorno confiante ao dia a dia.",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                {...fadeUp(index)}
                className="bg-white rounded-2xl p-8 border hover:shadow-lg transition-shadow"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="mb-4">{card.icon}</div>
                <h3
                  className="font-cormorant text-2xl mb-2"
                  style={{ color: "var(--color-dark)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-muted)" }}
                >
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Sun size={32} style={{ color: "var(--color-gold)" }} />,
                title: "Na Menopausa",
                desc: "Cuidados especializados para as alterações do pavimento pélvico e qualidade de vida nesta nova fase.",
              },
              {
                icon: <Shield size={32} style={{ color: "var(--color-gold)" }} />,
                title: "Dor e Disfunção Pélvica",
                desc: "Tratamento eficaz de incontinência, endometriose, vaginismo e outras disfunções pélvicas.",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                {...fadeUp(index + 3)}
                className="bg-white rounded-2xl p-8 border hover:shadow-lg transition-shadow"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="mb-4">{card.icon}</div>
                <h3
                  className="font-cormorant text-2xl mb-2"
                  style={{ color: "var(--color-dark)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-muted)" }}
                >
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/para-si"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--color-gold)" }}
            >
              Ver todas as condições →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 — Serviços Preview */}
      <section style={{ background: "var(--color-bg)" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              Os nossos serviços
            </p>
            <h2
              className="font-cormorant text-5xl"
              style={{ color: "var(--color-dark)" }}
            >
              Uma saúde completa começa aqui
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {servicosPreview.map((servico, i) => {
              const icons = [
                <Activity size={28} key="a" style={{ color: "var(--color-gold)" }} />,
                <Leaf size={28} key="l" style={{ color: "var(--color-gold)" }} />,
                <Compass size={28} key="c" style={{ color: "var(--color-gold)" }} />,
              ];
              return (
                <motion.div
                  key={servico.id ?? i}
                  {...fadeUp(i)}
                  className="rounded-2xl p-8 border"
                  style={{
                    background: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div className="mb-4">{icons[i]}</div>
                  <h3
                    className="font-cormorant text-xl mb-2"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {servico.titulo}
                  </h3>
                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {servico.descricaoCurta}
                  </p>
                  <Link
                    href="/servicos"
                    className="text-sm font-medium transition-opacity hover:opacity-70"
                    style={{ color: "var(--color-gold)" }}
                  >
                    Saber mais →
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/servicos"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--color-gold)" }}
            >
              Ver todos os serviços →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5 — Diferenciais */}
      <section style={{ background: "var(--color-dark)" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-cormorant text-5xl text-white">
              O que nos distingue
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <CheckCircle
                    size={40}
                    style={{ color: "var(--color-gold)" }}
                  />
                ),
                title: "Especialização Certificada",
                desc: "Formação contínua e certificações internacionais em Fisioterapia Pélvica e Uroginecologia.",
              },
              {
                icon: (
                  <Sparkles
                    size={40}
                    style={{ color: "var(--color-gold)" }}
                  />
                ),
                title: "Abordagem Integrativa",
                desc: "Olhamos para a mulher como um todo, integrando técnicas manuais, exercício terapêutico e educação para a saúde.",
              },
              {
                icon: (
                  <Heart size={40} style={{ color: "var(--color-gold)" }} />
                ),
                title: "Cuidado Personalizado",
                desc: "Cada consulta é única. Plano de tratamento adaptado às necessidades e objetivos de cada paciente.",
              },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i)}>
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-cormorant text-2xl text-white mb-3">
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Testemunhos */}
      <section style={{ background: "var(--color-surface)" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="font-cormorant text-5xl"
              style={{ color: "var(--color-dark)" }}
            >
              O que dizem as nossas pacientes
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {testemunhos.map((t, i) => (
              <motion.div
                key={t.nome ?? i}
                {...fadeUp(i)}
                className="bg-white rounded-2xl p-8 border"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                  className="font-cormorant leading-none mb-2 text-6xl"
                  style={{ color: "var(--color-gold)" }}
                >
                  ❝
                </div>
                <p
                  className="font-cormorant italic text-lg leading-relaxed mb-6"
                  style={{ color: "var(--color-dark)" }}
                >
                  {t.texto}
                </p>
                <div
                  className="text-sm"
                  style={{ color: "var(--color-muted)" }}
                >
                  <span className="font-semibold">{t.nome}</span>
                  {t.condicao ? ` — ${t.condicao}` : ""}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — CTA Final */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="/images/textura-linho.svg"
          alt="Textura de fundo"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(139, 94, 60, 0.75)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <h2
              className="font-cormorant text-white text-center mb-4"
              style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
            >
              Dê o primeiro passo para o seu bem-estar
            </h2>
            <p
              className="text-lg text-center mb-10"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              O primeiro passo é uma conversa. Estamos aqui para si.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={`https://wa.me/${contacto.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg font-semibold transition-opacity hover:opacity-90 flex items-center gap-2"
                style={{ background: "white", color: "var(--color-primary)" }}
              >
                <MessageCircle size={18} />
                Fale Connosco
              </a>
              <Link
                href="/contactos"
                className="border border-white text-white px-8 py-4 rounded-lg font-medium transition-opacity hover:opacity-80"
              >
                Ver Contactos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
