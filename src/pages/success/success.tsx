import AnimatedText from "@/components/animated-text/animatedText";
import { Container } from "@/components/container/Container";
import { Menu } from "@/components/menu/Menu";
import { Separator } from "@/components/separator/Separator";
import { Button } from "@/design-system/button/Button";
import { Typographie } from "@/design-system/typographie/Typographie";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface Props {
  sessionId: string;
}

const Success = ({ sessionId }: Props) => {
  const router = useRouter();
  const [dossierNumero, setDossierNumero] = useState("");
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const fetchSessionData = async () => {
      const res = await fetch(`/api/get-session?session_id=${sessionId}`);
      const session = await res.json();
      return session.metadata ? session.metadata.planId : null;
    };

    const generateNumeroDossier = () => {
      return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const initializeDossierNumero = async () => {
      const planId = await fetchSessionData();
      if (planId) {
        // Vérifiez si un numéro de dossier est déjà stocké pour cette session
        let numero = Cookies.get("dossierNumero");
        const savedPlanId = Cookies.get("planId");

        if (!numero || savedPlanId !== sessionId) {
          // Si le numéro n'existe pas ou le planId a changé, générez un nouveau numéro
          numero = generateNumeroDossier();
          Cookies.set("dossierNumero", numero, { expires: 7 }); // Stockez le numéro de dossier pour 7 jours
          Cookies.set("planId", sessionId, { expires: 7 }); // Stockez le planId pour 7 jours
        }
        setDossierNumero(numero);
      }
    };

    initializeDossierNumero();

    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    const redirectAndDeleteSession = async () => {
      // Supprimez la session de la base de données
      // await fetch(`/api/delete-session?session_id=${sessionId}`, {
      //   method: "DELETE",
      // });

      // Redirigez vers la page d'accueil
      router.push("/");
    };

    if (timer === 0) {
      redirectAndDeleteSession();
    }

    return () => clearInterval(countdown);
  }, [router, sessionId, timer]);

  return (
    <Container className="flex flex-col items-center justify-between">
      <Menu>Axis Studio</Menu>
      <div className="flex flex-col gap-5 items-center justify-center py-5 max-w-[380px] mx-auto">
        <Image
          src="/webp/system-regular-76-newspaper.webp"
          alt=""
          width={60}
          height={60}
        />
        <Typographie className="text-center">
          Votre transaction a bien été prise en compte. Un mail contenant un
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
                <span className="font-medium z-10">n°{dossierNumero}</span>
              </Button>
            </Typographie>
          </div>
          <Typographie size="h4" balise="h4">
            *Conservez votre numéro de dossier ainsi que le code pour pouvoir
            suivre son avancé
          </Typographie>
        </div>
        <Button variant="button" icon="false" className="z-10">
          Suivre mon dossier
        </Button>
      </div>
      <div className="sm:flex hidden absolute bottom-2">
        <Button variant="button" icon="true" isLoading>
          Redirection automatique dans{" "}
          <span className="font-medium">{timer}s</span>
        </Button>
      </div>
    </Container>
  );
};

export async function getServerSideProps(context: any) {
  const { session_id } = context.query;

  // Vérifiez si l'ID de session est valide
  if (!session_id) {
    return {
      notFound: true, // Retourne une page 404 si session_id n'est pas défini
    };
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/get-session?session_id=${session_id}`
  );
  const session = await res.json();

  if (!session || !session.metadata) {
    return {
      notFound: true, // Retourne une page 404 si la session est introuvable ou invalide
    };
  }

  return {
    props: {
      sessionId: session_id,
    },
  };
}

export default Success;
