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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Menu>Axis Studio</Menu>
      <Header />
      <Separator variant="simple" border="large" />
      <div className="flex flex-row items-center justify-between align-middle">
        <div className="flex flex-row items-center align-middle w-max gap-2">
          <Image src="/svg/Arrow.svg" width={22} height={22} alt="" />
          <Typographie size="h4" balise="h4" className="cursor-e-resize">
            <AnimatedText>Nous contacter par mail -:- </AnimatedText>
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
      <Article>Pourquoi nous ?</Article>
      <Separator variant="simple" border="fine" />
      <Tarif>Nos tarifs</Tarif>
    </Container>
  );
}
