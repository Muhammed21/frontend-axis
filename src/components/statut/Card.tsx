import { Typographie } from "@/design-system/typographie/Typographie";
import Image from "next/image";
import { Separator } from "../separator/Separator";

interface Props {
  variant?: "figma" | "code";
}

const footer = { name: "Muhammed Cavus", id: 1 };

export const Card = ({ variant }: Props) => {
  return (
    <section className="border border-[#E5E7EB] p-[5px] sm:w-max w-full h-max">
      <div className="flex flex-col gap-3.5 bg-[#F6F6F6] border-[#E5E7EB] py-[7px] pl-[7px] w-full h-max">
        <div className="flex">
          {variant === "figma" ? (
            <div className="flex flex-col items-start gap-2 ">
              <Typographie
                balise="h3"
                fontFamily="Cooper"
                className="text-[18px] italic"
              >
                Félicitation
              </Typographie>
              <Typographie
                size="h5"
                balise="h5"
                theme="gray"
                className="max-w-[260px]"
              >
                Voici la maquette Figma de votre site internet
              </Typographie>
            </div>
          ) : (
            <div className="flex flex-col items-start gap-2 ">
              <Typographie
                balise="h3"
                fontFamily="Cooper"
                className="text-[18px] italic"
              >
                Woaah
              </Typographie>
              <Typographie
                size="h5"
                balise="h5"
                theme="gray"
                className="max-w-[260px]"
              >
                Qu’est-ce que je vois la, le code de votre site internet est
                maintenant accessible sur Github!
              </Typographie>
            </div>
          )}
          <Image
            src="/images/imgTest.png"
            alt=""
            width={160}
            height={145}
            className="bg-contain"
          />
        </div>
        <div className="w-full h-max pr-[7px]">
          <hr className="w-full h-[0.5px] border-[#DDDDDD]" />
        </div>
        <div className="flex items-center w-full justify-between pr-[7px] cursor-pointer">
          <div className="flex items-center gap-2">
            <Image
              src="/images/profil.jpeg"
              alt=""
              width={25}
              height={25}
              className="rounded-full w-8 h-8 border-2 shadow-sm border-white "
            />
            <Typographie
              size="h4"
              balise="h4"
              weight="medium"
              className="text-[#363D4E]"
            >
              {footer.name}
            </Typographie>
          </div>
          <Image src="/svg/redirect.svg" alt="" width={33} height={33} />
        </div>
      </div>
    </section>
  );
};
