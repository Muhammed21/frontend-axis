import { Typographie } from "@/design-system/typographie/Typographie";
import Image from "next/image";
import AnimatedText from "../animated-text/animatedText";

export const Header = () => {
  return (
    <section className="flex flex-row w-full items-center align-middle justify-between">
      <div className="border border-gray/10 img-pattern sm:w-[100px] w-[50px] sm:h-[310px] h-[200px]"></div>
      <div className="flex flex-col space-y-2.5 w-full max-w-[900px] px-5">
        <div className="flex flex-row w-max gap-2 items-center align-middle">
          <Image src="/svg/Typographie.svg" width={24} height={24} alt="" />
          <Typographie
            size="h4"
            balise="h4"
            fontFamily="Courier"
            className="cursor-s-resize"
          >
            <AnimatedText>Articles</AnimatedText>
          </Typographie>
        </div>
        <Typographie
          size="h1"
          balise="h1"
          theme="black"
          weight="light"
          className="sm:flex hidden"
        >
          L’agence qui transforme vos idées en expériences digitales conçus pour
          captiver votre audience. Prêt à faire la différence ?
        </Typographie>
        <Typographie
          theme="black"
          weight="light"
          className="sm:hidden flex text-[19px]"
        >
          L’agence qui transforme vos idées en expériences digitales conçus pour
          captiver votre audience. Prêt à faire la différence ?
        </Typographie>
      </div>
      <div className="border border-gray/10 img-pattern sm:w-[100px] w-[50px] sm:h-[310px] h-[200px]"></div>
    </section>
  );
};
