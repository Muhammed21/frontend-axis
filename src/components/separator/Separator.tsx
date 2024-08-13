import { Button } from "@/design-system/button/Button";
import { Typographie } from "@/design-system/typographie/Typographie";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import Checkout from "../buyButton/buyButton";
import { CredenzaMenu } from "../credenza/credenzaMenu";

interface Props {
  variant?: "simple" | "double" | "projet" | "prix";
  border?: "fine" | "large";
  totalPrice?: number;
  data?: any;
}

export const Separator = ({
  variant = "simple",
  border = "fine",
  totalPrice,
  data,
}: Props) => {
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

  const images = [
    "/images/article-grid.png",
    "/images/projet-img.png",
    "/images/Readability.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="w-full">
      {variant === "simple" && (
        <hr className={clsx(variantStyles, borderStyles, "")} />
      )}

      {variant === "double" && (
        <div className="flex flex-col w-full gap-y-2">
          <hr className="border border-1 border-black " />
          <hr className="border-[0.5px] border-black " />
        </div>
      )}

      {variant === "projet" && (
        <div className="flex flex-col gap-10 w-full">
          <div className="relative w-full md:h-[424px] h-max">
            <Image
              width={1320}
              height={45}
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="max-h-full max-w-full object-cover mx-auto"
            />
          </div>
          <div className="relative flex w-full pb-4 items-center justify-center align-middle">
            <Separator variant="simple" border="large" />
            <div className="absolute flex flex-row gap-3 z-10">
              <div className="bg-white z-0">
                <Button
                  variant="button"
                  className="z-10"
                  icon="false"
                  fontFamily="Cooper"
                  onClick={prevImage}
                >
                  &#60;
                </Button>
              </div>
              <Button
                variant="button"
                className="font-semibold bg-white"
                icon="false"
                fontFamily="Cooper"
              >
                {currentIndex + 1} / {images.length}
              </Button>
              <div className="bg-white z-0">
                <Button
                  variant="button"
                  className="z-10"
                  icon="false"
                  fontFamily="Cooper"
                  onClick={nextImage}
                >
                  &#62;
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {variant === "prix" && (
        <div className="flex flex-col gap-10 w-full">
          <div className="relative flex w-full pb-4 items-center justify-center align-middle">
            <Separator variant="simple" border="large" />
            <div className="absolute flex flex-row gap-3 z-10">
              <div className="bg-white z-0">
                <Button
                  variant="button"
                  className="z-10"
                  icon="false"
                  fontFamily="Cooper"
                >
                  Prix total
                </Button>
              </div>
              <div className="bg-white items-center align-middle">
                <Button variant="button" fontFamily="Courier" icon="false">
                  <Typographie weight="bold">— {totalPrice}€ —</Typographie>
                </Button>
              </div>
              <div className="bg-white z-0">
                <Button
                  variant="button"
                  className="z-10"
                  icon="true"
                  fontFamily="Cooper"
                >
                  Acheter
                </Button>
                {/* <CredenzaMenu data={data} /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
