import { Container } from "@/components/container/Container";
import { Typographie } from "@/design-system/typographie/Typographie";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirige vers la page de succès après un certain délai
    // const timeout = setTimeout(() => {
    //   router.push("/");
    // }, 9000);
    // return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-[500px] mx-auto">
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-center justify-center bg-[#FFF6F3] border border-[#D5A894] border-dashed rounded-t-xl p-6 w-full">
          <div className="w-full flex flex-row justify-between items-end align-bottom">
            <Typographie
              size="h3"
              balise="h3"
              fontFamily="MaisonNeue"
              className="tracking-tight	w-max text-nowrap text-[#D5A894]"
              weight="bold"
            >
              PAIEMENT ÉCHOUÉ
            </Typographie>
            <hr className="border-[0.8px] border-dashed border-[#D5A894] w-full mb-2 mx-2" />
            <Typographie
              size="h3"
              balise="h3"
              fontFamily="MaisonNeue"
              className="tracking-tight	w-max text-nowrap text-[#D5A894]"
              weight="bold"
            >
              €250.00
            </Typographie>
          </div>
          {/* <p className="text-lg">
            Une erreur est survenue lors du traitement de votre paiement.
            Veuillez réessayer plus tard.
          </p> */}
        </div>
        <div className="bg-white border-x border-b border-dashed border-[#D5A894] w-full h-64 rounded-b-md"></div>
        {/* <Typographie size="h4" balise="h4" fontFamily="Cooper" className="ml-1">
          Redirection vers la page d'accueil dans quelques secondes...
        </Typographie> */}
      </div>
    </div>
  );
};

export default ErrorPage;
