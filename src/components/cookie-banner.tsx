import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const STORAGE_KEY = "kelmon-cookie-banner-dismissed";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isBio = pathname === "/links" || pathname === "/bio";

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
      className={`fixed inset-x-0 z-40 ${
        isBio
          ? "bottom-[calc(0.5rem+env(safe-area-inset-bottom,0px))] px-4"
          : "bottom-[calc(4.6rem+env(safe-area-inset-bottom,0px))] px-3 sm:px-4 md:bottom-4 md:px-6"
      }`}
    >
      <div
        className={`mx-auto flex flex-col items-stretch gap-3 rounded-lg bg-white px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5 sm:py-3.5 ${
          isBio ? "max-w-[430px] py-2.5" : "max-w-6xl"
        }`}
      >
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
