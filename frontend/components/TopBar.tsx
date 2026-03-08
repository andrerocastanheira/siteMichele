"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const messages = [
  "✦ Consultas presenciais em Lisboa",
  "✦ Fisioterapia Pélvica especializada para a mulher",
  "✦ Marque a sua consulta online — rápido e sem esperas",
];

export default function TopBar() {
  const allMessages = [...messages, ...messages];

  return (
    <div
      className="w-full overflow-hidden"
      style={{ height: 32, background: "var(--color-dark)" }}
    >
      <motion.div
        className="flex items-center h-full whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        style={{ width: "max-content" }}
      >
        {allMessages.map((msg, i) => (
          <span
            key={i}
            className="inline-flex items-center text-white px-12"
            style={{ fontSize: 11, letterSpacing: "0.05em" }}
          >
            {msg.includes("Marque") ? (
              <>
                ✦{" "}
                <Link
                  href="/agendamento"
                  className="ml-1 underline underline-offset-2"
                  style={{ color: "var(--color-gold-light)" }}
                >
                  Marque a sua consulta online
                </Link>
                {" "}— rápido e sem esperas
              </>
            ) : (
              <span style={{ color: "rgba(255,255,255,0.85)" }}>{msg}</span>
            )}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
