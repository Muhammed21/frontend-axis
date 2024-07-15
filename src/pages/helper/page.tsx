import { Container } from "@/components/container/Container";
import { Menu } from "@/components/menu/Menu";
import { Separator } from "@/components/separator/Separator";
import { Button } from "@/design-system/button/Button";
import { Typographie } from "@/design-system/typographie/Typographie";
import Image from "next/image";

export default function Helper() {
  return (
    <Container>
      <Menu>Design System</Menu>
      <div className="flex flex-row align-middle items-center justify-between">
        <Button variant="link" icon="true" fontFamily="Courier">
          Voici un lien avec une icône
        </Button>
        <Button variant="button" icon="false">
          Voici un bouton sans icône
        </Button>
      </div>
      <Separator variant="double" />
      {/* Partie Typo Cooper */}
      <div className="flex flex-row w-max gap-2 items-center align-middle">
        <Image src="/svg/Typographie.svg" width={24} height={24} alt="" />
        <Typographie size="h4" balise="h4" fontFamily="Courier">
          Typographie -:-{" "}
          <span className="underline">font &apos;#Cooper&apos;</span>
        </Typographie>
      </div>
      <Typographie size="h1" balise="h1" fontFamily="Cooper">
        h1 - h1 - Cooper
      </Typographie>
      <Typographie size="h2" balise="h2" fontFamily="Cooper">
        h2 - h2 - Cooper
      </Typographie>
      <Typographie size="h3" balise="h3" fontFamily="Cooper">
        h3 - h3 - Cooper
      </Typographie>
      <Typographie size="h4" balise="h4" fontFamily="Cooper">
        h4 - h4 - Cooper
      </Typographie>
      <Typographie size="h5" balise="h5" fontFamily="Cooper">
        h5 - h5 - Cooper
      </Typographie>
      <Typographie size="h6" balise="h6" fontFamily="Cooper">
        h6 - h6 - Cooper
      </Typographie>
      <Separator variant="simple" border="fine" />
      {/* Partie Typo Courier */}
      <div className="flex flex-row w-max gap-2 items-center align-middle">
        <Image src="/svg/Typographie.svg" width={24} height={24} alt="" />
        <Typographie size="h4" balise="h4" fontFamily="Courier">
          Typographie -:-{" "}
          <span className="underline">font &apos;#Courier&apos;</span>
        </Typographie>
      </div>
      <Typographie size="h1" balise="h1" fontFamily="Courier">
        h1 - h1 - Courier
      </Typographie>
      <Typographie size="h2" balise="h2" fontFamily="Courier">
        h2 - h2 - Courier
      </Typographie>
      <Typographie size="h3" balise="h3" fontFamily="Courier">
        h3 - h3 - Courier
      </Typographie>
      <Typographie size="h4" balise="h4" fontFamily="Courier">
        h4 - h4 - Courier
      </Typographie>
      <Typographie size="h5" balise="h5" fontFamily="Courier">
        h5 - h5 - Courier
      </Typographie>
      <Typographie size="h6" balise="h6" fontFamily="Courier">
        h6 - h6 - Courier
      </Typographie>
      <Separator variant="simple" border="large" />
      {/* Partie Bouton et lien  */}
      <div className="flex flex-row w-max gap-2 items-center align-middle">
        <Image src="/svg/Typographie.svg" width={24} height={24} alt="" />
        <Typographie size="h4" balise="h4" fontFamily="Courier">
          Bouton et lien -:- <span className="underline">avec Icône</span>
        </Typographie>
      </div>
      <div className="flex flex-col space-y-5 w-max">
        <Button
          variant="button"
          icon="true"
          className="pl-2.5 underline underline-offset-2"
          fontFamily="Cooper"
        >
          Bouton avec icône
        </Button>
        <Button variant="link" icon="true">
          Lien avec icône
        </Button>
      </div>
      <Separator variant="simple" border="fine" />
      {/* Partie Bouton et lien sans icône  */}
      <div className="flex flex-row w-max gap-2 items-center align-middle">
        <Image src="/svg/Typographie.svg" width={24} height={24} alt="" />
        <Typographie size="h4" balise="h4" fontFamily="Courier">
          Bouton et lien -:- <span className="underline">sans Icône</span>
        </Typographie>
      </div>
      <div className="flex flex-col space-y-5 w-max">
        <Button variant="button" icon="false" disable fontFamily="Cooper">
          Bouton sans icône
        </Button>
        <Button variant="link" icon="false">
          Lien sans icône
        </Button>
      </div>
    </Container>
  );
}
