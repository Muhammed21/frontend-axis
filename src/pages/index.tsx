import Image from "next/image";
import { Inter } from "next/font/google";
import { Typographie } from "@/design-system/typographie/Typographie";
import { Button } from "@/design-system/button/Button";
import { Container } from "@/components/container/Container";
import { Menu } from "@/components/menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Menu>Axis Studio</Menu>
      <Typographie size="h1" balise="h1" fontFamily="Cooper">
        Cooper - h1
      </Typographie>
      <Typographie size="h1" balise="h1" fontFamily="Courier">
        Courier - h1
      </Typographie>
      <Button
        variant="button"
        icon="true"
        className="pl-2 underline rounded-none"
        fontFamily="Cooper"
      >
        Planifier un appel
      </Button>
      <Button variant="link" fontFamily="Courier" icon="true">
        En savoir plus
      </Button>
    </Container>
  );
}
