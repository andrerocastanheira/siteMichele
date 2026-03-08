import { z } from "zod";

export const agendamentoSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  telemovel: z.string().regex(/^\+?351?\s?9\d{8}$/, "Número de telemóvel inválido (ex: 912 345 678)"),
  email: z.string().email("Email inválido"),
  data: z.string().min(1, "Selecione uma data"),
  motivoConsulta: z.string().min(1, "Selecione o motivo da consulta"),
  hora: z.string().min(1, "Selecione uma hora"),
  comoNosConheceu: z.string().optional(),
  mensagem: z.string().optional(),
});

export type AgendamentoForm = z.infer<typeof agendamentoSchema>;
