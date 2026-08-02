import { CANDIDATE } from "@/lib/campaign-data";
import logo from "@/assets/Logo-Site-PAdre-kelmon.png";

const QUICK_LINKS = [
  { href: "#historia", label: "Quem é Padre Kelmon" },
  { href: "#bandeiras", label: "Bandeiras" },
  { href: "#galeria", label: "Galeria" },
  { href: "#videos", label: "Vídeos" },
  { href: "#numeros", label: "Números" },
  { href: "#cadastro", label: "Cadastro de apoio" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-[1140px] gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <img 
            src={logo} 
            alt="Padre Kelmon" 
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            {CANDIDATE.role} pelo {CANDIDATE.party}. Fé, família e coragem para resgatar o Brasil.
          </p>
        </div>

        <nav aria-label="Links rápidos">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Links rápidos
          </h2>
          <ul className="mt-4 space-y-2">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div id="privacidade">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Privacidade e LGPD
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Os dados informados no formulário são usados exclusivamente para comunicação da
            campanha e organização do voluntariado, conforme a Lei Geral de Proteção de Dados (Lei
            nº 13.709/2018). Você pode solicitar acesso, correção ou exclusão dos seus dados a
            qualquer momento pelo canal oficial de contato.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            PLACEHOLDER: inserir CNPJ da campanha, endereço, e-mail do encarregado de dados (DPO) e
            os dados de registro eleitoral exigidos pela legislação.
          </p>
        </div>
      </div>

      <div className="border-t border-border/60 px-5 py-6">
        <p className="mx-auto max-w-[1140px] text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Campanha {CANDIDATE.name}. Conteúdo informativo de
          pré-campanha, elaborado a partir de fontes públicas. Material sujeito a revisão pela
          assessoria antes da publicação oficial.
        </p>
      </div>
    </footer>
  );
}
