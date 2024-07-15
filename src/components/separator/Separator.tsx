import clsx from "clsx";

interface Props {
  variant?: "simple" | "double";
  border?: "fine" | "large";
}

export const Separator = ({ variant = "simple", border = "fine" }: Props) => {
  //Définition des types
  let variantStyles: String = "";
  let borderStyles: String = "";

  //
  switch (variant) {
    case "simple":
      variantStyles = "border border-black";
      break;
    case "double":
      variantStyles = "";
      break;
  }

  switch (border) {
    case "fine":
      borderStyles = "border-[0.5px]";
      break;
    case "large":
      borderStyles = "border border-1";
      break;
  }

  return (
    <section className="w-full z-[-1]">
      {variant === "simple" ? (
        <hr className={clsx(variantStyles, borderStyles, "z-[-1]")} />
      ) : (
        <div className="flex flex-col w-full gap-y-2">
          <hr className="border border-1 border-black " />
          <hr className="border-[0.5px] border-black " />
        </div>
      )}
    </section>
  );
};
