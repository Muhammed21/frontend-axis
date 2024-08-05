import Head from "next/head";
import { Menu } from "@/components/menu/Menu";
import { Separator } from "@/components/separator/Separator";
import { Container } from "@/components/container/Container";
import { Button } from "@/design-system/button/Button";
import { Typographie } from "@/design-system/typographie/Typographie";
import AnimatedText from "@/components/animated-text/animatedText";
import Image from "next/image";
import Inner from "../layout/inner/index";
import { Option } from "./Option";
import { Projet } from "./Projet";

const SingleProjet = ({ title, content, button, img }: any) => {
  return (
    <Inner>
      <Container className="relative z-10">
        <Head>
          <title>{title}</title>
        </Head>
        <Menu at="Prendre comme exemple" link="/">
          {title}
        </Menu>
        {/* <div className="flex flex-row items-center justify-between align-middle">
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
        </div> */}
        {/* <Separator variant="double" /> */}
        <div className="max-w-[1320px] flex flex-col gap-5 relative w-full">
          <div className="flex flex-row w-max gap-2 items-center align-middle">
            <Image src="/svg/Typographie.svg" width={24} height={24} alt="" />
            <Typographie
              size="h4"
              balise="h4"
              fontFamily="Courier"
              className="cursor-s-resize"
            >
              <AnimatedText>Les visuelles du projets</AnimatedText>
            </Typographie>
          </div>
          {/* <Image
            src="/images/article-grid.png"
            alt=""
            width={1320}
            height={425}
            className=""
          /> */}
        </div>
        <Separator variant="projet" />
        <div className="flex flex-row w-max gap-2 items-center align-middle">
          <Image src="/svg/Typographie.svg" width={24} height={24} alt="" />
          <Typographie
            size="h4"
            balise="h4"
            fontFamily="Courier"
            className="cursor-s-resize"
          >
            <AnimatedText>Les options choisies</AnimatedText>
          </Typographie>
        </div>
        <Option />
        <Separator variant="double" />
        <Projet>Nos autres projets</Projet>
      </Container>
    </Inner>
  );
};

export default SingleProjet;
