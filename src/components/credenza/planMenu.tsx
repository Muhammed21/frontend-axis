import { Typographie } from "@/design-system/typographie/Typographie";
import AnimatedText from "../animated-text/animatedText";
import Checkout from "../buyButton/buyButton";
import CheckoutLater from "../buyLater/buyLater";
import Image from "next/image";
import { Separator } from "../separator/Separator";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import { Button } from "@/design-system/button/Button";

export const PlanMenu = ({ stripeLink, title, id }: any) => {
  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <button className="flex flex-row gap-2 items-center align-middle">
          <Button variant="button" icon="true" fontFamily="Cooper">
            <button className="underline">Génerer un ticket</button>
          </Button>
        </button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader className="flex flex-row w-full justify-between">
          <div className="flex flex-row w-max gap-2 items-center align-middle">
            <Image src="/svg/receipt.svg" width={24} height={24} alt="" />
            <Typographie
              size="h4"
              balise="h4"
              fontFamily="Courier"
              className="cursor-s-resize"
            >
              <AnimatedText>Confirmation de paiement</AnimatedText>
            </Typographie>
          </div>
        </CredenzaHeader>
        <Separator variant="double" border="fine" />
        <div className="grid gap-2 md:mx-0 mx-5 mb-2 md:mt-0 mt-5 opacity-35 cursor-not-allowed">
          <div className="flex flex-row gap-2 items-center align-middle">
            <Image src="/svg/hand-coins.svg" alt="" width={22} height={22} />

            <Typographie size="h4" balise="h4" theme="black" weight="regular">
              Payer comptant <span className="underline">désactivé</span>
            </Typographie>
          </div>
          <div className="bg-gray/15 border border-dashed">
            <CredenzaBody className="flex flex-row justify-between md:px-3 py-3">
              <Button disable>
                <Checkout
                  name={title ?? ""}
                  amount={stripeLink ?? 0}
                  id={id ?? 0}
                />
              </Button>
              <Image src="/svg/info-gray.svg" alt="" width={20} height={20} />
            </CredenzaBody>
          </div>
        </div>
        <div className="grid gap-5 md:mx-0 mx-5 md:mb-0 mb-10 md:mt-0 mt-5">
          <div className="grid gap-2 ">
            <div className="flex flex-row gap-2 items-center align-middle">
              <Image src="/svg/coins.svg" alt="" width={22} height={22} />

              <Typographie size="h4" balise="h4" theme="black" weight="regular">
                Payer un acompte
              </Typographie>
            </div>
            <div className="bg-gray/15 border border-dashed">
              <CredenzaBody className="flex flex-row justify-between md:px-3 py-3">
                <CheckoutLater
                  name={title ?? ""}
                  amount={stripeLink ?? 0}
                  id={id ?? 0}
                />

                <Image src="/svg/info-gray.svg" alt="" width={20} height={20} />
              </CredenzaBody>
            </div>
          </div>
          <Separator variant="simple" />
          <Typographie size="h4" balise="h4" theme="gray">
            * Une fois le paiement validé, sous peu, vous recevrez un devis avec
            toutes les infos. nécessaire <br /> <br /> * Tous vos paiements sont
            cryptés, avec le niveau de Certification le plus stricte du secteur{" "}
            <span className="font-bold underline">PCI de niveau 1</span>
          </Typographie>
        </div>
      </CredenzaContent>
    </Credenza>
  );
};
