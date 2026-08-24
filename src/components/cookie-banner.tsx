import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const STORAGE_KEY = "kelmon-cookie-banner-dismissed";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isBio = pathname === "/bio";

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) !== "1") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore quota / private mode
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className={`fixed inset-x-0 z-40 px-3 sm:px-4 md:px-6 ${
        isBio
          ? "bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))]"
          : "bottom-[calc(4.6rem+env(safe-area-inset-bottom,0px))] md:bottom-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-3 rounded-lg bg-white px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5 sm:py-3.5">
        <p className="text-sm leading-relaxed text-neutral-800 sm:text-[0.95rem]">
          Utilizamos cookies conforme o{" "}
          <Link
            to="/"
            hash="privacidade"
            className="font-medium underline underline-offset-2 transition-opacity hover:opacity-80"
            style={{ color: "var(--blue-primary)" }}
          >
            Aviso de Privacidade
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex h-10 shrink-0 items-center justify-center rounded px-6 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.02] sm:h-9"
          style={{ backgroundColor: "var(--blue-primary)" }}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
