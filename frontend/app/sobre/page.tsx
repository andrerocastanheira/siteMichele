"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { credenciais, metricas } from "@/lib/data";
import { fadeUp, fadeUpAnimate } from "@/lib/animations";

export default function SobrePage() {
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
              {["CREFITO Certificada", "Membro APA", "12+ Anos Experiência"].map(
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
            <Image
              src="/images/doutora-coluna.png"
              alt="Dra. Michele Carvalho Colchete"
              width={500}
              height={620}
              className="object-cover rounded-2xl w-full"
            />
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
              Formação e filosofia de trabalho
            </h2>
            <div className="flex flex-col gap-4 mb-8">
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                A Dra. Michele Carvalho Colchete licenciou-se em Fisioterapia e
                rapidamente encontrou na Saúde Pélvica a sua verdadeira vocação. A
                complexidade e a delicadeza desta área, aliadas ao impacto profundo
                que tem na vida das mulheres, tornaram-na na especialidade de
                eleição.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                Com pós-graduação em Fisioterapia Pélvica e Obstétrica e formação
                avançada em disfunções sexuais femininas, acumula mais de uma década
                de experiência no acompanhamento de mulheres em todas as fases da
                vida — da gravidez à menopausa.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                A sua filosofia baseia-se numa abordagem integrativa: tratar não
                apenas o sintoma, mas compreender a mulher como um todo. Cada plano
                de tratamento é desenhado de forma única, respeitando a história, o
                corpo e os objetivos de cada paciente.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {credenciais.map((cred, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-gold)" }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-dark)" }}
                  >
                    <strong>{cred.titulo}</strong>
                    {cred.instituicao && ` — ${cred.instituicao}`}
                    {cred.ano && `, ${cred.ano}`}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Numbers section */}
      <section style={{ background: "var(--color-primary)" }} className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp()}>
            <div className="grid grid-cols-3 gap-8 text-center">
              {metricas.map((m, i) => (
                <div key={i}>
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
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
