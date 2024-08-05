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

const HEADER_URL = "/api/proxy";

const ROUTE = process.env.NEXT_PUBLIC_ROUTE;

interface Props {
  id?: number;
  slogan?: string;
  brand?: string;
  at?: string;
  header?: string;
  mail?: string;
  children?: React.ReactNode;
}

export default function Home() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [table, setTable] = useState<Props[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${HEADER_URL}?page=${page}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const table = (await res.json()) as Props[];
        setTable(table);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center w-auto justify-center">
        <Button icon="true" isLoading variant="button">
          Chargement en cours
        </Button>
      </div>
    );
  }
  return (
    <Inner>
      <Container>
        <Menu at="Suivre mon dossier" link="./folderSearch/FolderSearch">
          Axis Studio
        </Menu>
        <Header />
        <Separator variant="simple" border="large" />
        <div className="flex flex-row relative z-10 items-center justify-between align-middle">
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
                <a href="mailto:mcavus048@gmail.com">contact@axis-studio.fr</a>
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
        <Separator variant="double" />
        {/* <Image src="/images/phosphor.png" alt="" width={1320} height={215} /> */}
        <div className="flex flex-col items-center mx-auto w-full">
          <Typographie size="h4">
            Truster by the{" "}
            <span className="bg-[#37373724] py-0.5 px-1 rounded-md">
              fatest
            </span>{" "}
            growing B2B companies
          </Typographie>
          <div className="flex flex-row items-center justify-center gap-2">
            <Image
              src="/svg/WTTJ.svg"
              width={130}
              height={50}
              alt=""
              className="grayscale"
            />
            <Image
              src="/svg/SB.svg"
              width={130}
              height={50}
              alt=""
              className="grayscale"
            />
            <Image
              src="/svg/contentsquare-seeklogo.svg"
              width={130}
              height={50}
              alt=""
              className="grayscale"
            />
          </div>
        </div>
        <Separator variant="double" />
      </Container>
    </Inner>
  );
}
