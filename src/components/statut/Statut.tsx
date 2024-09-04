import { Typographie } from "@/design-system/typographie/Typographie";
import { Separator } from "../separator/Separator";
import AnimatedText from "../animated-text/animatedText";
import Image from "next/image";
import { Card } from "./Card";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface DossierProps {
  id?: number;
  name?: string;
  planId?: number;
  sessionId?: string;
  numDossier?: string;
  email?: string;
  createdAt?: string;
}

const DOSSIER_URL = "/api/dossier";

export const Statut = () => {
  const [numDossier, setNumDossier] = useState("");
  const [find, setFind] = useState(false);
  const [dossiers, setDossiers] = useState<DossierProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDossiers = async () => {
      if (numDossier.length === 0) return; // Ne rien faire si le champ est vide

      setLoading(true);
      setError(null); // Réinitialiser les erreurs avant de faire une nouvelle requête

      try {
        const response = await fetch(`${DOSSIER_URL}?numDossier=${numDossier}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Données reçues:", data); // Afficher les données pour vérification

        // Vérification des données reçues
        if (
          data &&
          data.id &&
          data.name &&
          data.planId &&
          data.sessionId &&
          data.numDossier &&
          data.email &&
          data.createdAt
        ) {
          console.log("Données valides, mise à jour du state.");
          setDossiers([data]); // Envelopper l'objet reçu dans un tableau
          setFind(true); // Mettre à jour find sur true
        } else {
          console.log("Données non valides ou incomplètes.");
          setError("Dossier non trouvé ou données manquantes");
          setDossiers([]);
          setFind(false);
        }
      } catch (error) {
        setError("Erreur lors de la recherche des dossiers");
        console.error("Erreur lors de la recherche des dossiers:", error);
        setDossiers([]); // Effacez les dossiers en cas d'erreur
        setFind(false);
      } finally {
        setLoading(false);
      }
    };

    fetchDossiers();
  }, [numDossier]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // Enlever les caractères non numériques

    if (value.length > 10) {
      value = value.slice(0, 10); // Limiter à 10 caractères
    }

    // Ajouter un tiret après chaque 4 caractères
    if (value.length > 4 && value.length <= 8) {
      value = value.replace(/(\d{4})(\d+)/, "$1-$2");
    } else if (value.length > 8) {
      value = value.replace(/(\d{4})(\d{4})(\d+)/, "$1-$2-$3");
    }

    setNumDossier(value);
  };

  return (
    <section className="flex flex-col gap-5 pb-5">
      <div className="flex flex-row bg-[#FAFAFA] border border-[#E5E7EB] w-full h-max px-[14px] py-[10px] justify-between items-center">
        <Typographie size="h5" balise="h5" theme="gray" className="roboto-mono">
          ▲ ~ axis-studio-dossier /
        </Typographie>
        <Typographie
          size="h5"
          balise="h5"
          fontFamily="MaisonNeue"
          className="bg-[#37373710] px-1 py-0.5 rounded-sm cursor-pointer"
        >
          n°
          <input
            type="tel"
            value={numDossier}
            onChange={handleInputChange}
            maxLength={9} // Max length including dashes
            placeholder=""
            className="bg-[#EDEDED] w-20"
          />
        </Typographie>
      </div>

      <Separator variant="simple" border="large" />

      {/* Affichage des dossiers ou message d'erreur */}
      {error && (
        <div className="flex w-full h-max border border-[#E5E7EB] border-dashed bg-[#FAFAFA] py-5 items-center justify-center">
          <Typographie size="h4" balise="h4" theme="gray">
            {error}
          </Typographie>
        </div>
      )}
      {loading ? (
        <Typographie size="h5" balise="h5">
          Chargement...
        </Typographie>
      ) : (
        <div>
          {dossiers.length > 0 ? (
            <div className="flex flex-col gap-5">
              {dossiers.map((dossier) => (
                <div key={dossier.id} className="flex flex-col gap-5">
                  <motion.div
                    initial={{ x: "5%", opacity: 0, scale: 1 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 }}
                    className="flex flex-row w-max gap-2 items-center align-middle"
                  >
                    <Image
                      src="/svg/hard-drives.svg"
                      width={24}
                      height={24}
                      alt=""
                    />
                    <Typographie
                      size="h4"
                      balise="h4"
                      fontFamily="Courier"
                      className="cursor-s-resize"
                    >
                      <AnimatedText>Les logs</AnimatedText>
                    </Typographie>
                  </motion.div>
                  <div className="relative h-max w-full flex flex-col items-start justify-start gap-6">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="w-0.5 border left-2.5 z-0 border-l h-full absolute"
                    />
                    <motion.div
                      initial={{ x: "5%", opacity: 0, scale: 1 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className="flex flex-row gap-3 items-center z-10"
                    >
                      <Image
                        src="/svg/lock.svg"
                        alt=""
                        width={22}
                        height={22}
                      />
                      <Typographie
                        size="h5"
                        balise="h5"
                        fontFamily="MaisonNeue"
                        className="tracking-[-0.5px]"
                      >
                        Connexion réussi à votre dossier
                      </Typographie>
                    </motion.div>
                    <motion.div
                      initial={{ x: "5%", opacity: 0, scale: 1 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 }}
                      className="flex flex-row gap-3 items-center z-10"
                    >
                      <Image
                        src="/svg/check-badge.svg"
                        alt=""
                        width={22}
                        height={22}
                      />
                      <Typographie
                        size="h5"
                        balise="h5"
                        fontFamily="MaisonNeue"
                        className="tracking-[-0.5px]"
                      >
                        Dossier créé le{" "}
                        <span className="underline">{dossier.createdAt}</span>
                      </Typographie>
                    </motion.div>
                    <motion.div
                      initial={{ x: "5%", opacity: 0, scale: 1 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-row gap-3 items-center z-10"
                    >
                      <Image
                        src="/svg/check-badge.svg"
                        alt=""
                        width={22}
                        height={22}
                      />
                      <Typographie
                        size="h5"
                        balise="h5"
                        fontFamily="MaisonNeue"
                        className="tracking-[-0.5px]"
                      >
                        Le propriétaire est{" "}
                        <span className="underline">{dossier.name}</span>
                      </Typographie>
                    </motion.div>
                    <motion.div
                      initial={{ x: "5%", opacity: 0, scale: 1 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25 }}
                      className="flex flex-row gap-3 items-center z-10"
                    >
                      <Image
                        src="/svg/lock.svg"
                        alt=""
                        width={22}
                        height={22}
                      />
                      <Typographie
                        size="h5"
                        balise="h5"
                        fontFamily="MaisonNeue"
                        className="tracking-[-0.5px]"
                      >
                        Connexion réussie à votre dossier
                      </Typographie>
                    </motion.div>
                  </div>
                </div>
              ))}
              <Separator variant="double" />
              <div className="flex flex-col items-start gap-5">
                <motion.div
                  initial={{ x: "5%", opacity: 0, scale: 1 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-row w-max gap-2 items-center align-middle"
                >
                  <Image
                    src="/svg/swatches.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                  <Typographie
                    size="h4"
                    balise="h4"
                    fontFamily="Courier"
                    className="cursor-s-resize"
                  >
                    <AnimatedText>Votre design</AnimatedText>
                  </Typographie>
                </motion.div>
                <motion.div
                  initial={{ x: "5%", opacity: 0, scale: 1 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 }}
                  className="w-full h-max"
                >
                  <Card variant="figma" />
                </motion.div>
              </div>
              <Separator variant="simple" border="fine" />
              <div className="flex flex-col items-start gap-5">
                <motion.div
                  initial={{ x: "5%", opacity: 0, scale: 1 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-row w-max gap-2 items-center align-middle"
                >
                  <Image src="/svg/Code.svg" width={24} height={24} alt="" />
                  <Typographie
                    size="h4"
                    balise="h4"
                    fontFamily="Courier"
                    className="cursor-s-resize"
                  >
                    <AnimatedText>Votre code</AnimatedText>
                  </Typographie>
                </motion.div>
                <motion.div
                  initial={{ x: "5%", opacity: 0, scale: 1 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 }}
                  className="w-full h-max"
                >
                  <Card variant="code" />
                </motion.div>
              </div>
            </div>
          ) : (
            !loading &&
            !error && (
              <div className="flex w-full h-max border border-[#E5E7EB] border-dashed bg-[#FAFAFA] py-5 items-center justify-center">
                <Typographie size="h4" balise="h4" theme="gray">
                  Saisisser ci-dessus votre numéro de dossier
                </Typographie>
              </div>
            )
          )}
        </div>
      )}

      {/* {find === true ? <div>find = true</div> : <div>find = false</div>} */}
    </section>
  );
};
