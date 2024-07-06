import localFont from "next/font/local";
import clsx from "clsx";

interface Props {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  balise?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontFamily?: "Cooper" | "CooperLight" | "Courier";
  theme?: "black" | "gray";
  weight?: "light" | "regular" | "medium" | "bold";
  className?: String;
  children: React.ReactNode;
}

const cooperLight = localFont({
  src: "../font/Cooper-light.ttf", //Police CooperBTLight qui est en local
});
const cooperRegular = localFont({
  src: "../font/CooperBTLight-normal-400-100.ttf", //Police CooperBTLight qui est en local
});

export const Typographie = ({
  size,
  balise: Balise = "h3",
  fontFamily,
  theme,
  weight,
  className,
  children,
}: Props) => {
  //Définition des types
  let sizeStyles: String = "";
  let fontStyles: String = "";
  let themeStyles: String = "";
  let weightStyles: String = "";

  //Switch case pour toute les props
  switch (size) {
    case "h1":
      sizeStyles = "text-h1";
      break;
    case "h2":
      sizeStyles = "text-h2";
      break;
    case "h3":
      sizeStyles = "text-h3";
      break;
    case "h4":
      sizeStyles = "text-h4";
      break;
    case "h5":
      sizeStyles = "text-h5";
      break;
    case "h6":
      sizeStyles = "text-h6";
      break;
  }

  switch (fontFamily) {
    case "Cooper":
      fontStyles = `${cooperRegular.className}`;
      break;
    case "CooperLight":
      fontStyles = `${cooperLight.className}`;
      break;
    case "Courier":
      fontStyles = "font-['courier']";
      break;
  }

  switch (theme) {
    case "black":
      themeStyles = "text-black";
      break;
    case "gray":
      themeStyles = "text-gray";
      break;
  }

  switch (weight) {
    case "light":
      weightStyles = "font-light";
      break;
    case "regular":
      weightStyles = "font-normal";
      break;
    case "medium":
      weightStyles = "font-medium";
      break;
    case "bold":
      weightStyles = "font-bold";
      break;
  }
  return (
    <Balise
      className={clsx(
        sizeStyles,
        themeStyles,
        fontStyles,
        weightStyles,
        className
      )}
    >
      {children}
    </Balise>
  );
};
