import { Typographie } from "@/design-system/typographie/Typographie";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-10 pt-5">
      <div className="flex flex-row gap-1 items-center">
        <Image src="/svg/bookmark.svg" alt="" width={18} height={18} />

        <Typographie
          size="h4"
          balise="h4"
          theme="gray"
          weight="medium"
          className="flex flex-row gap-2.5 underline-from-left w-max cursor-pointer"
        >
          Legal & Privacy Center
        </Typographie>
      </div>
      <div className="flex flex-col gap-3">
        <Typographie size="h4" balise="h4" theme="gray" weight="medium">
          Développé en{" "}
          <span className=" bg-blue/10 text-black py-0.5 px-1  rounded-md">
            🇲🇫 France
          </span>{" "}
          et en{" "}
          <span className="bg-[#Ff0000]/10 text-black py-0.5 px-1 rounded-md">
            🇹🇷 Turquie
          </span>
        </Typographie>
        <Typographie size="h4" balise="h4" theme="gray" weight="medium">
          © 2024 Axis Studio
        </Typographie>
      </div>
    </div>
  );
};
