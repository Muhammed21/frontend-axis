import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Ajustez cette valeur pour différentes vitesses de défilement
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fonction d’assouplissement personnalisée
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return <Component {...pageProps} />;
}
