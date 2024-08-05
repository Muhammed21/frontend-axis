import { Typographie } from "@/design-system/typographie/Typographie";
import Image from "next/image";

interface Props {}

export const Option = () => {
  return (
    <section className="relative flex lg:flex-row gap-4 lg:gap-0 lg:items-baseline items-center flex-col justify-between w-full">
      <div className="flex flex-col md:gap-3 gap-4 items-baseline">
        <div className=" flex flex-col gap-6 border border-black p-4 items-start lg:w-[320px] w-full h-max">
          <div className="flex flex-col gap-2">
            <Typographie
              fontFamily="CooperLight"
              className="text-[20px] md:text-h2"
            >
              Logo
            </Typographie>

            <Typographie
              size="h5"
              balise="h5"
              theme="black"
              fontFamily="Courier"
            >
              Un site singlepage est idéal pour les personnes cherchant à faire
              un tunnel de vente
            </Typographie>
          </div>
          {/* <div className="flex flex-col gap-3">
            <Typographie
              size="h4"
              balise="h4"
              theme="gray"
              className="flex flex-row gap-3"
            >
              <Image
                src="/svg/Circuit-gray.svg"
                alt=""
                width={16}
                height={16}
              />
              Fichier haute résolution
            </Typographie>
            <Typographie
              size="h4"
              balise="h4"
              theme="gray"
              className="flex flex-row gap-3"
            >
              <Image
                src="/svg/Circuit-gray.svg"
                alt=""
                width={16}
                height={16}
              />
              Cohérence visuelle
            </Typographie>
            <Typographie
              size="h4"
              balise="h4"
              theme="gray"
              className="flex flex-row gap-3"
            >
              <Image
                src="/svg/Circuit-gray.svg"
                alt=""
                width={16}
                height={16}
              />
              Design sur mesure
            </Typographie>
          </div> */}
        </div>
        {/* Deuxieme options */}
        <div className=" flex flex-col gap-6 border border-black p-4 items-start lg:w-[320px] w-full h-max">
          <div className="flex flex-col gap-2">
            <Typographie
              fontFamily="CooperLight"
              className="text-[20px] md:text-h2"
            >
              Newsletter
            </Typographie>
            <Typographie
              size="h5"
              balise="h5"
              theme="black"
              fontFamily="Courier"
            >
              Un site singlepage est idéal pour les personnes cherchant à faire
              un tunnel de vente
            </Typographie>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:gap-3 gap-4 items-baseline">
        <div className=" flex flex-col gap-6 border border-black p-4 items-start lg:w-[320px] w-full h-max">
          <div className="flex flex-col gap-2">
            <Typographie
              fontFamily="CooperLight"
              className="text-[20px] md:text-h2"
            >
              Maquette du site
            </Typographie>
            <Typographie
              size="h5"
              balise="h5"
              theme="black"
              fontFamily="Courier"
            >
              Un site singlepage est idéal pour les personnes cherchant à faire
              un tunnel de vente
            </Typographie>
          </div>
          {/* <div className="flex flex-col gap-3">
            <Typographie
              size="h4"
              balise="h4"
              theme="gray"
              className="flex flex-row gap-3"
            >
              <Image
                src="/svg/Circuit-gray.svg"
                alt=""
                width={16}
                height={16}
              />
              Fichier haute résolution
            </Typographie>
            <Typographie
              size="h4"
              balise="h4"
              theme="gray"
              className="flex flex-row gap-3"
            >
              <Image
                src="/svg/Circuit-gray.svg"
                alt=""
                width={16}
                height={16}
              />
              Cohérence visuelle
            </Typographie>
            <Typographie
              size="h4"
              balise="h4"
              theme="gray"
              className="flex flex-row gap-3"
            >
              <Image
                src="/svg/Circuit-gray.svg"
                alt=""
                width={16}
                height={16}
              />
              Design sur mesure
            </Typographie>
          </div> */}
        </div>
        {/* Deuxieme options */}
        <div className=" flex flex-col gap-6 border border-black p-4 items-start lg:w-[320px] w-full h-max">
          <div className="flex flex-col gap-2">
            <Typographie
              fontFamily="CooperLight"
              className="text-[20px] md:text-h2"
            >
              Articles / Blog
            </Typographie>
            <Typographie
              size="h5"
              balise="h5"
              theme="black"
              fontFamily="Courier"
            >
              Un site singlepage est idéal pour les personnes cherchant à faire
              un tunnel de vente
            </Typographie>
          </div>
        </div>
      </div>
      {/* troisieme colonne */}
      <div className="flex flex-col md:gap-3 gap-4 items-baseline">
        <div className=" flex flex-col gap-6 border border-black p-4 items-start lg:w-[320px] w-full h-max">
          <div className="flex flex-col gap-2">
            <Typographie
              fontFamily="CooperLight"
              className="text-[20px] md:text-h2"
            >
              Max. 4 pages
            </Typographie>
            <Typographie
              size="h5"
              balise="h5"
              theme="black"
              fontFamily="Courier"
            >
              Un site singlepage est idéal pour les personnes cherchant à faire
              un tunnel de vente
            </Typographie>
          </div>
        </div>
        {/* Deuxieme options */}
        <div className=" flex flex-col gap-6 border border-black p-4 items-start lg:w-[320px] w-full h-max">
          <div className="flex flex-col gap-2">
            <Typographie
              fontFamily="CooperLight"
              className="text-[20px] md:text-h2"
            >
              CMS (base de donnée)
            </Typographie>
            <Typographie
              size="h5"
              balise="h5"
              theme="black"
              fontFamily="Courier"
            >
              Un site singlepage est idéal pour les personnes cherchant à faire
              un tunnel de vente
            </Typographie>
          </div>
        </div>
      </div>
      {/* Quatrieme colonne */}
      <div className="flex flex-col md:gap-3 gap-4 items-baseline">
        <div className=" flex flex-col gap-6 border border-black p-4 items-start lg:w-[320px] w-full h-max">
          <div className="flex flex-col gap-2">
            <Typographie
              fontFamily="CooperLight"
              className="text-[20px] md:text-h2"
            >
              Carrousel
            </Typographie>
            <Typographie
              size="h5"
              balise="h5"
              theme="black"
              fontFamily="Courier"
            >
              Un site singlepage est idéal pour les personnes cherchant à faire
              un tunnel de vente
            </Typographie>
          </div>
        </div>
        {/* Deuxieme options */}
        <div className=" flex flex-col gap-6 border border-black p-4 items-start lg:w-[320px] w-full h-max">
          <div className="flex flex-col gap-2 w-full h-max">
            <Typographie
              fontFamily="CooperLight"
              className="text-[20px] md:text-h2"
            >
              Formulaire (contact...)
            </Typographie>
            <Typographie
              size="h5"
              balise="h5"
              theme="black"
              fontFamily="Courier"
            >
              Un site singlepage est idéal pour les personnes cherchant à faire
              un tunnel de vente
            </Typographie>
          </div>
        </div>
      </div>
    </section>
  );
};
