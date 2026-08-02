import { useState } from "react";
import { Loader2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal, SectionHeading } from "./primitives";

const UFS = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

const schema = z.object({
  nome: z.string().trim().min(3, "Informe seu nome completo").max(100),
  telefone: z
    .string()
    .trim()
    .min(10, "Informe um telefone válido com DDD")
    .max(20, "Telefone muito longo"),
  email: z.string().trim().email("Informe um e-mail válido").max(255),
  cidade: z.string().trim().min(2, "Informe sua cidade").max(80),
  estado: z.string().trim().min(2, "Selecione seu estado"),
  lgpd: z.literal(true, { errorMap: () => ({ message: "É necessário aceitar os termos" }) }),
});

type Errors = Partial<Record<string, string>>;

export function SignupForm() {
  const [estado, setEstado] = useState("SP");
  const [voluntario, setVoluntario] = useState(false);
  const [novidades, setNovidades] = useState(true);
  const [lgpd, setLgpd] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      nome: String(form.get("nome") ?? ""),
      telefone: String(form.get("telefone") ?? ""),
      email: String(form.get("email") ?? ""),
      cidade: String(form.get("cidade") ?? ""),
      estado,
      lgpd,
    };

    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Confira os campos destacados.");
      return;
    }

    setErrors({});
    setLoading(true);
    // PLACEHOLDER: conectar ao backend/CRM da campanha para persistir o cadastro.
    setTimeout(() => {
      setLoading(false);
      toast.success("Cadastro recebido! Em breve entraremos em contato.");
      event.currentTarget?.reset?.();
    }, 700);
  }

  const err = (field: string) =>
    errors[field] ? (
      <p id={`${field}-error`} role="alert" className="mt-1 text-xs text-destructive">
        {errors[field]}
      </p>
    ) : null;

  return (
    <section id="cadastro" className="section-y border-t border-border/50 bg-card/30">
      <div className="mx-auto w-[1140px] max-w-full px-5 lg:px-0">
        <SectionHeading
          eyebrow="Cadastro"
          title="Junte-se a essa missão"
          subtitle="Deixe seus dados para receber a agenda da campanha ou se tornar voluntário."
        />

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="surface-card mt-12 rounded-2xl p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="nome">Nome completo</Label>
                <Input
                  id="nome"
                  name="nome"
                  autoComplete="name"
                  maxLength={100}
                  aria-invalid={!!errors["nome"]}
                  aria-describedby={errors["nome"] ? "nome-error" : undefined}
                  className="mt-2"
                  placeholder="Seu nome"
                />
                {err("nome")}
              </div>

              <div>
                <Label htmlFor="telefone">Telefone (WhatsApp)</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  maxLength={20}
                  aria-invalid={!!errors["telefone"]}
                  aria-describedby={errors["telefone"] ? "telefone-error" : undefined}
                  className="mt-2"
                  placeholder="(11) 90000-0000"
                />
                {err("telefone")}
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={255}
                  aria-invalid={!!errors["email"]}
                  aria-describedby={errors["email"] ? "email-error" : undefined}
                  className="mt-2"
                  placeholder="voce@email.com"
                />
                {err("email")}
              </div>

              <div>
                <Label htmlFor="cidade">Cidade</Label>
                <Input
                  id="cidade"
                  name="cidade"
                  autoComplete="address-level2"
                  maxLength={80}
                  aria-invalid={!!errors["cidade"]}
                  aria-describedby={errors["cidade"] ? "cidade-error" : undefined}
                  className="mt-2"
                  placeholder="São Paulo"
                />
                {err("cidade")}
              </div>

              <div>
                <Label htmlFor="estado">Estado</Label>
                <Select value={estado} onValueChange={setEstado}>
                  <SelectTrigger id="estado" className="mt-2" aria-label="Estado">
                    <SelectValue placeholder="UF" />
                  </SelectTrigger>
                  <SelectContent className="max-h-64">
                    {UFS.map((uf) => (
                      <SelectItem key={uf} value={uf}>
                        {uf}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {err("estado")}
              </div>
            </div>

            <div className="mt-7 space-y-3">
              <label className="flex items-start gap-3 text-sm">
                <Checkbox
                  checked={voluntario}
                  onCheckedChange={(v) => setVoluntario(v === true)}
                  aria-label="Quero ser voluntário"
                  className="mt-0.5"
                />
                <span>Quero ser voluntário da campanha</span>
              </label>
              <label className="flex items-start gap-3 text-sm">
                <Checkbox
                  checked={novidades}
                  onCheckedChange={(v) => setNovidades(v === true)}
                  aria-label="Quero receber novidades"
                  className="mt-0.5"
                />
                <span>Quero receber novidades e a agenda de eventos</span>
              </label>
              <label className="flex items-start gap-3 text-sm">
                <Checkbox
                  checked={lgpd}
                  onCheckedChange={(v) => setLgpd(v === true)}
                  aria-label="Aceito a política de privacidade"
                  aria-invalid={!!errors["lgpd"]}
                  className="mt-0.5"
                />
                <span className="text-muted-foreground">
                  Autorizo o uso dos meus dados para contato da campanha, conforme a{" "}
                  <a href="#privacidade" className="text-primary underline underline-offset-4">
                    Política de Privacidade
                  </a>{" "}
                  e a LGPD (Lei nº 13.709/2018).
                </span>
              </label>
              {err("lgpd")}
            </div>

            <Button type="submit" variant="campaign" size="xl" className="mt-8 w-full" disabled={loading}>
              {loading ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
              Quero fazer parte dessa missão
            </Button>

            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="size-3.5 text-primary" aria-hidden="true" />
              Seus dados não são compartilhados com terceiros.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
