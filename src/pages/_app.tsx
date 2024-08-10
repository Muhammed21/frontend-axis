import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Footer } from "@/components/footer/Footer";
import { Container } from "@/components/container/Container";
import { Separator } from "@/components/separator/Separator";

export default function App({ Component, pageProps, router }: AppProps) {
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

  return (
    <div className="pb-8">
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
        <Container>
          <Separator variant="simple" border="fine" />
          <Footer />
        </Container>
      </AnimatePresence>
    </div>
  );
}
