import AnimatedText from "@/components/animated-text/animatedText";
import { Container } from "@/components/container/Container";
import { Fonctionnalite } from "@/components/fonctionnalite/Fonctionnalite";
import { Menu } from "@/components/menu/Menu";
import { Separator } from "@/components/separator/Separator";
import { Button } from "@/design-system/button/Button";
import { Typographie } from "@/design-system/typographie/Typographie";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {}

const Success = () => {
  const router = useRouter();

  useEffect(() => {
    //Redirige vers la page de succès après un certain délai
    const timeout = setTimeout(() => {
      router.push("/");
    }, 30000);
    return () => clearTimeout(timeout);
  }, [router]);
  return (
    <Container className="flex flex-col items-center justify-between">
      <Menu>Axis Studio</Menu>
      <div className="flex flex-col gap-5 items-center justify-center py-10 max-w-[380px] mx-auto">
        <Image src="/svg/Arrow.svg" alt="" width={50} height={50} />
        <Typographie className="text-center">
          Votre transaction à bien été prise en compte. Un mail contenant un
          devis détaillé vous parviendra.
        </Typographie>
      </div>
      <Separator variant="double" />
      <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between w-full align-middle gap-5 bg-lightorange z-[-10] border p-2.5 border-dotted border-orange">
        <div className="flex flex-col gap-5 items-start">
          <div className="flex flex-row items-center align-middle w-max gap-2">
            <Image src="/svg/Arrow.svg" width={22} height={22} alt="" />
            <Typographie size="h4" balise="h4" className="cursor-e-resize z-10">
              <AnimatedText>Votre numéro de dossier -:- </AnimatedText>
              <Button variant="link" icon="false">
                <span className="font-medium z-10">n°1254329</span>
              </Button>
            </Typographie>
          </div>
          <Typographie size="h4" balise="h4">
            *Conservez votre numéro de dossier ainsi que le code pour pouvoir
            suivre son avancé
          </Typographie>
        </div>
        <Button variant="button" icon="false" className="z-10">
          Afficher le code
        </Button>
      </div>
      <div className="sm:flex hidden absolute bottom-2">
        <Button variant="button" icon="true" isLoading>
          Redirection automatique dans <span className="font-medium">30s</span>
        </Button>
      </div>
    </Container>
  );
};

export default Success;
