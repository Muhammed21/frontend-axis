import clsx from "clsx";
import localFont from "next/font/local";
import Image from "next/image";

interface Props {
  variant?: "link" | "demi-link" | "button";
  fontFamily?: "Cooper" | "Courier" | "MaisonNeue";
  icon?: "true" | "false";
  src?: String;
  disable?: boolean;
  isLoading?: boolean;
  className?: String;
  onClick?: React.MouseEventHandler;
  href?: String;
  children: React.ReactNode;
}

const cooperRegular = localFont({
  src: "../font/CooperBTLight-normal-400-100.ttf", //Police CooperBTLight qui est en local
});
const maisonNeueLight = localFont({
  src: "../font/Maison-Neue-Mono.ttf",
});

export const Button = ({
  variant,
  fontFamily,
  icon,
  src,
  disable,
  isLoading,
  className,
  onClick,
  href,
  children,
}: Props) => {
  //Définiton des types
  let variantStyles: String = "";
  let fontStyles: String = "";

  //Switch case pour toute les props
  switch (variant) {
    case "link":
      variantStyles =
        "underline underline-offset-2 whitespace-nowrap w-max h-max text-h4";
      break;
    case "demi-link":
      variantStyles =
        "underline underline-offset-2 whitespace-nowrap w-max h-max text-h4";
      break;
    case "button":
      variantStyles =
        "border border-black py-1.5 px-3.5 w-max h-max rounded-sm text-h4";
      break;
  }

  switch (fontFamily) {
    case "Cooper":
      fontStyles = `${cooperRegular.className}`;
      break;
    case "Courier":
      fontStyles = "font-['courier']";
      break;
    case "MaisonNeue":
      fontStyles = `${maisonNeueLight.className}`;
      break;
  }

  return (
    <button
      className={clsx(variantStyles, fontStyles, className)}
      disabled={disable}
      onClick={onClick}
    >
      {disable ? (
        <div className="flex flex-row gap-2 items-center align-middle justify-center">
          <div className="underline-from-left-disable text-black cursor-not-allowed">
            Bouton désactivé
          </div>
        </div>
      ) : (
        <div>
          {icon === "true" ? (
            <div className="flex flex-row gap-2 items-center align-middle justify-center">
              <Image src="/svg/Arrow.svg" width={22} height={22} alt="" />
              {variant === "demi-link" ? (
                <div className="underline-from-left-projet text-black">
                  {children}
                </div>
              ) : (
                <div className="underline-from-left text-black">{children}</div>
              )}
            </div>
          ) : (
            <div className="flex flex-row gap-2 items-center align-middle justify-center">
              <div className="underline-from-left text-black">{children}</div>
            </div>
          )}
        </div>
      )}
    </button>
  );
};
