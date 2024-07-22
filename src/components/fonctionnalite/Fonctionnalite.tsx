import { Typographie } from "@/design-system/typographie/Typographie";
import AnimatedText from "../animated-text/animatedText";
import Image from "next/image";
import { useState } from "react";
import data from "@/data/data.json";

interface Props {
  children: React.ReactNode;
}

export const Fonctionnalite = ({ children }: Props) => {
  // État pour gérer l'ID de la div active
  const [activeDiv, setActiveDiv] = useState<string | null>(null);

  const handleClick = (divId: string) => {
    // Activer la div cliquée si elle n'est pas déjà active
    if (activeDiv !== divId) {
      setActiveDiv(divId);
    }
  };

  const getDivStyle = (divId: string): React.CSSProperties => ({
    backgroundColor: activeDiv === divId ? "#535353" : "#FAFAFA",
    border: activeDiv !== divId ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
    padding: "6px",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  });

  //état local pour stocket l'index du tableau actuellement affiché
  const [showTableau1, setShowTableau1] = useState(true);
  const [showTableau2, setShowTableau2] = useState(false);
  const [showTableau3, setShowTableau3] = useState(false);

  const showTabl1 = () => {
    setShowTableau1(true);
    setShowTableau2(false);
    setShowTableau3(false);
  };

  const showTabl2 = () => {
    setShowTableau1(false);
    setShowTableau2(true);
    setShowTableau3(false);
  };

  const showTabl3 = () => {
    setShowTableau1(false);
    setShowTableau2(false);
    setShowTableau3(true);
  };

  const table1 = data.tableau[0];
  const table2 = data.tableau[1];
  const table3 = data.tableau[2];

  return (
    <section className="flex flex-col space-y-3">
      <div className="flex flex-row w-max gap-2 items-center align-middle">
        <Image src="/svg/Typographie.svg" width={24} height={24} alt="" />
        <Typographie
          size="h4"
          balise="h4"
          fontFamily="Courier"
          className="cursor-s-resize"
        >
          <AnimatedText>{children}</AnimatedText>
        </Typographie>
      </div>
      <div className="flex sm:flex-row flex-col w-full justify-between items-center">
        {/* partie de gauche */}
        <div className="flex flex-row items-end w-full">
          {/* ordinateur */}
          {showTableau1 && (
            <div className="flex flex-col sm:w-[600px] w-full mx-0 h-80 bg-white border border-gray/40 rounded-none drop-shadow p-4">
              <div className="bg-[#37373724] border border-dashed border-[#373737] h-max rounded-[0px] w-full py-2.5 px-4">
                <Typographie size="h3" balise="h3" fontFamily="Cooper">
                  Axis Studio n°1
                </Typographie>
              </div>
            </div>
          )}
          {showTableau2 && (
            <div className="flex flex-col sm:w-[600px] w-full mx-0 h-80 bg-white border border-gray/40 rounded-none drop-shadow p-4">
              <div className="bg-orange/25 border border-dashed border-orange h-max rounded-[0px] w-full py-2.5 px-4">
                <Typographie size="h3" balise="h3" fontFamily="Cooper">
                  Axis Studio n°2
                </Typographie>
              </div>
            </div>
          )}
          {showTableau3 && (
            <div className="flex flex-col sm:w-[600px] w-full mx-0 h-80 bg-white border border-gray/40 rounded-none drop-shadow p-4">
              <div className="bg-blue/25 border border-dashed border-blue h-max rounded-[0px] w-full py-2.5 px-4">
                <Typographie size="h3" balise="h3" fontFamily="Cooper">
                  Axis Studio n°3
                </Typographie>
              </div>
            </div>
          )}
          {/* telephone */}
          {showTableau1 && (
            <div className="sm:flex hidden flex-col relative w-[180px] left-[-40px] h-72 bg-white border border-gray/40 rounded-none drop-shadow p-4">
              <div className="bg-[#37373724] border border-dashed border-[#373737] h-max rounded-[0px] w-full py-1.5 px-3">
                <Typographie size="h5" balise="h5" fontFamily="Cooper">
                  Axis Studio n°1
                </Typographie>
              </div>
            </div>
          )}
          {showTableau2 && (
            <div className="sm:flex hidden flex-col relative w-[180px] left-[-40px] h-72 bg-white border border-gray/40 rounded-none drop-shadow p-4">
              <div className="bg-orange/25 border border-dashed border-orange h-max rounded-[0px] w-full py-1.5 px-3">
                <Typographie size="h5" balise="h5" fontFamily="Cooper">
                  Axis Studio n°2
                </Typographie>
              </div>
            </div>
          )}
          {showTableau3 && (
            <div className="sm:flex hidden flex-col relative w-[180px] left-[-40px] h-72 bg-white border border-gray/40 rounded-none drop-shadow p-4">
              <div className="bg-blue/25 border border-dashed border-blue h-max rounded-[0px] w-full py-1.5 px-3">
                <Typographie size="h5" balise="h5" fontFamily="Cooper">
                  Axis Studio n°3
                </Typographie>
              </div>
            </div>
          )}
        </div>
        {/* partie de droite */}
        <div className="flex relative sm:flex-col pt-5 sm:pt-0 flex-row gap-14 items-center justify-center">
          <div className="absolute sm:flex hidden left-3.5 border-l-[1.5px] z-[-1] border-gray/40 w-[1px] h-[80%]" />
          <hr className="absolute sm:hidden flex w-full border-[1px] border-gray/40" />
          <div className="flex flex-row gap-14 items-center justify-start z-10">
            {/* <div className="bg-[#535353] p-1.5 rounded-full items-center cursor-pointer">
              <Image
                src="svg/Cube.svg"
                width={17}
                height={17}
                alt=""
                onClick={showTabl1}
              />
            </div> */}
            <label className="flex items-center cursor-pointer w-max">
              <input
                type="radio"
                name="customRadio"
                className="peer sr-only"
                defaultChecked
                onClick={showTabl1}
              />
              <div className="bg-lightgray p-1.5 rounded-full items-center border border-black/10 cursor-pointer flex peer-checked:hidden w-max h-max">
                <Image
                  src="svg/Cube-gray.svg"
                  width={17}
                  height={17}
                  alt=""
                  className=""
                />
              </div>
              <div className="bg-lightgray p-1.5 rounded-full items-center border border-black/10 cursor-pointer hidden peer-checked:flex peer-checked:border-[#535353] peer-checked:bg-[#535353] w-max h-max">
                <Image
                  src="svg/Cube.svg"
                  width={17}
                  height={17}
                  alt=""
                  className=""
                />
              </div>
            </label>
            <div className="sm:flex hidden">
              <Typographie
                size="h4"
                balise="h4"
                fontFamily="MaisonNeue"
                className="max-w-64"
              >
                <span className="font-semibold font-courier">
                  {table1.title}{" "}
                </span>
                {table1.content}
              </Typographie>
            </div>
          </div>
          <div className="flex flex-row gap-14 items-center justify-start z-10">
            {/* <div className="bg-lightgray p-1.5 rounded-full items-center border border-black/10 cursor-pointer">
              <Image
                src="svg/Clock.svg"
                width={17}
                height={17}
                alt=""
                onClick={showTabl2}
              />
            </div> */}
            <label className="flex items-center cursor-pointer w-max">
              <input
                type="radio"
                name="customRadio"
                className="peer sr-only"
                onClick={showTabl2}
              />
              <div className="bg-lightgray p-1.5 rounded-full items-center border border-black/10 cursor-pointer flex peer-checked:hidden w-max h-max">
                <Image
                  src="svg/Circuit-gray.svg"
                  width={17}
                  height={17}
                  alt=""
                  className=""
                />
              </div>
              <div className="bg-lightgray p-1.5 rounded-full items-center border border-black/10 cursor-pointer hidden peer-checked:flex peer-checked:border-orange peer-checked:bg-orange w-max h-max">
                <Image
                  src="svg/Circuit.svg"
                  width={17}
                  height={17}
                  alt=""
                  className=""
                />
              </div>
            </label>
            <div className="sm:flex hidden">
              <Typographie
                size="h4"
                balise="h4"
                fontFamily="MaisonNeue"
                className="max-w-64"
              >
                <span className="font-semibold font-courier">
                  {table2.title}{" "}
                </span>
                {table2.content}
              </Typographie>
            </div>
          </div>
          <div className="flex flex-row gap-14 items-center justify-start z-10">
            {/* <div className="bg-lightgray p-1.5 rounded-full items-center border border-black/10 cursor-pointer">
              <Image
                src="svg/Clock.svg"
                width={17}
                height={17}
                alt=""
                onClick={showTabl3}
              />
            </div> */}
            <label className="flex items-center cursor-pointer w-max">
              <input
                type="radio"
                name="customRadio"
                className="peer sr-only"
                onClick={showTabl3}
              />
              <div className="bg-lightgray p-1.5 rounded-full items-center border border-black/10 cursor-pointer flex peer-checked:hidden w-max h-max">
                <Image
                  src="svg/Circuit-gray.svg"
                  width={17}
                  height={17}
                  alt=""
                  className=""
                />
              </div>
              <div className="bg-lightgray p-1.5 rounded-full items-center border border-black/10 cursor-pointer hidden peer-checked:flex peer-checked:border-blue peer-checked:bg-blue w-max h-max">
                <Image
                  src="svg/Circuit.svg"
                  width={17}
                  height={17}
                  alt=""
                  className=""
                />
              </div>
            </label>
            <div className="sm:flex hidden">
              <Typographie
                size="h4"
                balise="h4"
                fontFamily="MaisonNeue"
                className="max-w-64"
              >
                <span className="font-semibold font-courier">
                  {table3.title}{" "}
                </span>
                {table3.content}
              </Typographie>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
