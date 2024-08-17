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
  const [numDossier, setNumDossier] = useState("");
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const res = await fetch(`/api/get-session?session_id=${sessionId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch session data");
        }
        const data = await res.json();
        console.log("Fetched session data:", data);
        if (data.numDossier) {
          console.log("Dossier Number from API:", data.numDossier);
          setNumDossier(data.numDossier);
          Cookies.set("dossierNumero", data.numDossier, { expires: 7 });
        }
      } catch (error) {
        console.error("Error fetching session data:", error);
      }
    };

    fetchSessionData();

    // const generateNumeroDossier = () => {
    //   return Math.floor(100000 + Math.random() * 900000).toString();
    // };

    // const initializeDossierNumero = async () => {
    //   const dossierNumero = await fetchSessionData();
    //   if (dossierNumero) {
    //     setDossierNumero(dossierNumero);
    //     Cookies.set("dossierNumero", dossierNumero, { expires: 7 }); // Stockez le numéro de dossier pour 7 jours
    //   }
    // };

    // initializeDossierNumero();

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
    <Container className="flex flex-col pb-5 items-center justify-between">
      <Menu at={`Redirection dans ${timer}s`} link="/">
        Axis Studio
      </Menu>
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
      <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between w-full align-middle gap-5 bg-lightorange z-[10] border p-2.5 border-dotted border-orange">
        <div className="flex flex-col gap-5 items-start">
          <div className="flex flex-row items-center align-middle w-max gap-2">
            <Image src="/svg/Arrow.svg" width={22} height={22} alt="" />
            <Typographie size="h4" balise="h4" className="cursor-e-resize z-10">
              <AnimatedText>Votre numéro de dossier -:- </AnimatedText>
              <Button variant="link" icon="false">
                <span className="font-medium z-10">n°{numDossier}</span>
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
      {/* <div className="sm:flex hidden absolute bottom-2">
        <Button variant="button" icon="true" isLoading>
          Redirection automatique dans{" "}
          <span className="font-medium">{timer}s</span>
        </Button>
      </div> */}
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
  console.log("Server-side fetched session data:", session); // Debug: Affiche les données récupérées côté serveur

  // if (!session || !session.metadata) {
  //   return {
  //     notFound: true, // Retourne une page 404 si la session est introuvable ou invalide
  //   };
  // }

  return {
    props: {
      sessionId: session_id,
    },
  };
}

export default Success;
