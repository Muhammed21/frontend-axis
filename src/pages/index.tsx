import Image from "next/image";
import { Inter } from "next/font/google";
import { Typographie } from "@/design-system/typographie/Typographie";
import { Button } from "@/design-system/button/Button";
import { Container } from "@/components/container/Container";
import { Menu } from "@/components/menu/Menu";
import { Header } from "@/components/header/Header";
import { Separator } from "@/components/separator/Separator";
import { Projet } from "@/components/projet/Projet";
import AnimatedText from "@/components/animated-text/animatedText";
import { Article } from "@/components/article/Article";
import { Tarif } from "@/components/tarif/Tarif";
import { Fonctionnalite } from "@/components/fonctionnalite/Fonctionnalite";
import Inner from "@/components/layout/inner/index";
import Checkout from "@/components/buyButton/buyButton";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";
import page from "./helper/page";

const inter = Inter({ subsets: ["latin"] });

const plan = { name: "Plan à 250€", amount: 1050, id: 1 }; // Exemple de plan, adaptez selon vos besoins

export default function Home() {
  return (
    <Inner>
      <Container>
        <Menu>Axis Studio</Menu>
        <Header />
        <Separator variant="simple" border="large" />
        <div className="flex flex-row items-center justify-between align-middle">
          <div className="flex flex-row items-center align-middle w-max gap-2">
            <Image src="/svg/Arrow.svg" width={22} height={22} alt="" />
            <Typographie
              size="h4"
              balise="h4"
              className="cursor-e-resize flex flex-row"
            >
              <div className="sm:flex hidden">
                <AnimatedText>Nous contacter par mail -:- </AnimatedText>
              </div>
              <Button variant="link" icon="false">
                contact@axis-studio.fr
              </Button>
            </Typographie>
          </div>
          <Button variant="button" icon="false">
            Planifier un appel
          </Button>
        </div>
        <Separator variant="double" />
        <Projet>Nos meilleurs projets</Projet>
        <Separator variant="double" />
        <Fonctionnalite>Nos fonctionnalités clés</Fonctionnalite>
        <Separator variant="double" />
        <Article>Pourquoi nous choisir ?</Article>
        <Separator variant="simple" border="fine" />
        <Tarif>Des tarifs simples et transparents</Tarif>
      </Container>
    </Inner>
  );
}
