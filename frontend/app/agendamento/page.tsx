"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2, Calendar } from "lucide-react";
import { agendamentoSchema, AgendamentoForm } from "@/lib/schemas";
import { motivosConsulta, horasDisponiveis, comoNosConheceu } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1 text-xs" style={{ color: "#c0392b", fontFamily: "DM Sans, sans-serif" }}>
      {message}
    </p>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium mb-1.5"
      style={{ color: "var(--color-text)", fontFamily: "DM Sans, sans-serif" }}
    >
      {children}
    </label>
  );
}

const inputBase =
  "w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none";
const inputStyle = {
  borderColor: "var(--color-border)",
  fontFamily: "DM Sans, sans-serif",
  color: "var(--color-text)",
  background: "white",
};
const inputFocusStyle = "focus:ring-2 focus:ring-amber-200/60";

export default function AgendamentoPage() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AgendamentoForm>({ resolver: zodResolver(agendamentoSchema) });

  async function onSubmit(data: AgendamentoForm) {
    await fetch("/api/agendamento", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 8000);
  }

  return (
    <>
      {/* Hero */}
      <section
        className="text-center"
        style={{ background: "var(--color-surface)", paddingTop: 96, paddingBottom: 48 }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp()}>
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--color-gold)", fontFamily: "DM Sans, sans-serif" }}
            >
              Marcação de Consulta
            </p>
            <h1
              className="font-cormorant mb-4"
              style={{ fontSize: "clamp(40px,5vw,68px)", color: "var(--color-dark)" }}
            >
              Reserve a sua consulta
            </h1>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-muted)", fontFamily: "DM Sans, sans-serif", maxWidth: 500, margin: "0 auto" }}
            >
              Preencha o formulário abaixo e entraremos em contacto em breve para confirmar a sua marcação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16" style={{ background: "var(--color-bg)" }}>
        <div className="max-w-xl mx-auto px-6">
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 gap-4 text-center"
            >
              <CheckCircle size={56} strokeWidth={1.5} style={{ color: "#22c55e" }} />
              <h2
                className="font-cormorant text-4xl"
                style={{ color: "var(--color-dark)" }}
              >
                Pedido recebido!
              </h2>
              <p style={{ color: "var(--color-muted)", fontFamily: "DM Sans, sans-serif" }}>
                ✓ Entraremos em contacto em breve para confirmar a sua marcação.
              </p>
            </motion.div>
          ) : (
            <motion.div {...fadeUp()}>
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                {/* Nome + Telemóvel */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="nome">Nome completo *</Label>
                    <input
                      id="nome"
                      {...register("nome")}
                      className={`${inputBase} ${inputFocusStyle}`}
                      style={inputStyle}
                      placeholder="Maria Silva"
                    />
                    <FieldError message={errors.nome?.message} />
                  </div>
                  <div>
                    <Label htmlFor="telemovel">Telemóvel *</Label>
                    <input
                      id="telemovel"
                      {...register("telemovel")}
                      className={`${inputBase} ${inputFocusStyle}`}
                      style={inputStyle}
                      placeholder="912 345 678"
                      type="tel"
                    />
                    <FieldError message={errors.telemovel?.message} />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`${inputBase} ${inputFocusStyle}`}
                    style={inputStyle}
                    placeholder="maria@email.pt"
                  />
                  <FieldError message={errors.email?.message} />
                </div>

                {/* Data + Hora */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="data">Data preferida *</Label>
                    <input
                      id="data"
                      type="date"
                      {...register("data")}
                      className={`${inputBase} ${inputFocusStyle}`}
                      style={inputStyle}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    <FieldError message={errors.data?.message} />
                  </div>
                  <div>
                    <Label htmlFor="hora">Hora preferida *</Label>
                    <select
                      id="hora"
                      {...register("hora")}
                      className={`${inputBase} ${inputFocusStyle}`}
                      style={inputStyle}
                    >
                      <option value="">Selecione</option>
                      {horasDisponiveis.map((h) => (
                        <option key={h} value={h}>{h}</option>
                      ))}
                    </select>
                    <FieldError message={errors.hora?.message} />
                  </div>
                </div>

                {/* Motivo */}
                <div>
                  <Label htmlFor="motivoConsulta">Motivo da consulta *</Label>
                  <select
                    id="motivoConsulta"
                    {...register("motivoConsulta")}
                    className={`${inputBase} ${inputFocusStyle}`}
                    style={inputStyle}
                  >
                    <option value="">Selecione o motivo</option>
                    {motivosConsulta.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <FieldError message={errors.motivoConsulta?.message} />
                </div>

                {/* Como nos conheceu */}
                <div>
                  <Label htmlFor="comoNosConheceu">Como nos conheceu?</Label>
                  <select
                    id="comoNosConheceu"
                    {...register("comoNosConheceu")}
                    className={`${inputBase} ${inputFocusStyle}`}
                    style={inputStyle}
                  >
                    <option value="">Selecione (opcional)</option>
                    {comoNosConheceu.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <Label htmlFor="mensagem">Mensagem / observações</Label>
                  <textarea
                    id="mensagem"
                    {...register("mensagem")}
                    rows={4}
                    className={`${inputBase} ${inputFocusStyle}`}
                    style={{ ...inputStyle, resize: "vertical" }}
                    placeholder="Informação adicional relevante para a consulta..."
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-semibold text-sm text-white mt-2"
                  style={{
                    background: isSubmitting ? "var(--color-muted)" : "var(--color-primary)",
                    height: 52,
                    fontFamily: "DM Sans, sans-serif",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      A enviar...
                    </>
                  ) : (
                    <>
                      <Calendar size={18} />
                      Enviar Pedido de Marcação
                    </>
                  )}
                </motion.button>

                <p
                  className="text-center text-xs mt-1"
                  style={{ color: "var(--color-muted)", fontFamily: "DM Sans, sans-serif" }}
                >
                  Os seus dados são tratados com total confidencialidade.
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
