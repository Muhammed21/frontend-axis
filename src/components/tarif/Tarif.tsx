import { Button } from "@/design-system/button/Button";
import { Typographie } from "@/design-system/typographie/Typographie";
import AnimatedText from "../animated-text/animatedText";
import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Checkout from "../buyButton/buyButton";

const TARIF_URL = "/api/tarif";

interface Props {
  variant?: "no-popular" | "popular";
  children: React.ReactNode;
  id?: number;
  imgTop?: string;
  title?: string;
  content?: string;
  critaire1?: string;
  critaire2?: string;
  critaire3?: string;
  critaire4?: string;
  critaire5?: string;
  critaire6?: string;
  critaire7?: string;
  critaire8?: string;
  button?: string;
  stripeLink?: number;
  imgBottom?: string;
  populaire?: boolean;
}

export const Tarif = ({
  variant,
  children,
  id,
  imgBottom,
  title,
  content,
  critaire1,
  critaire2,
  critaire3,
  critaire4,
  critaire5,
  critaire6,
  critaire7,
  critaire8,
  button,
  stripeLink,
  imgTop,
  populaire,
}: Props) => {
  //const plan = { name: "Plan à 250€", amount: 250, id: 1 };
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [table, setTable] = useState<Props[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${TARIF_URL}?page=${page}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const table = (await res.json()) as Props[];
        setTable(table);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  return (
    <section className="flex flex-col items-start justify-start gap-5">
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
      <div className="flex sm:flex-row flex-col gap-10 sm:gap-0 w-full justify-between">
        {table.map((data, index) => (
          <div
            key={data.id}
            className={clsx(
              "flex flex-col items-start sm:max-w-[330px] w-full space-y-4 sm:border-r sm:px-4 px-0 border-black border-r-none",
              index === 0 && "pl-0",
              index === 3 && "border-none pr-0"
            )}
          >
            <div className="border border-black img-pattern align-middle h-11 w-full" />
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                {data.populaire ? (
                  <div className="flex flex-row gap-2.5 align-middle items-center">
                    <Typographie size="h2" balise="h2" fontFamily="Cooper">
                      {data.title}
                    </Typographie>
                    <div className="bg-[#37373724] border border-black px-1.5 py-1 align-middle items-center justify-center h-max w-max">
                      <Typographie size="h5" balise="h5">
                        Populaire
                      </Typographie>
                    </div>
                  </div>
                ) : (
                  <Typographie size="h2" balise="h2" fontFamily="Cooper">
                    {data.title}
                  </Typographie>
                )}
                <Typographie
                  size="h5"
                  balise="h5"
                  fontFamily="MaisonNeue"
                  className="leading-5"
                >
                  {data.content}
                </Typographie>
              </div>
              <div className="flex flex-col items-start justify-start h-max w-full gap-3">
                <Typographie
                  size="h4"
                  balise="h4"
                  theme="gray"
                  className="font-helvetica tracking-wide"
                >
                  {data.critaire1}
                </Typographie>
                {data.critaire2 && (
                  <Typographie
                    size="h4"
                    balise="h4"
                    theme="gray"
                    className="font-helvetica tracking-wide"
                  >
                    {data.critaire2}
                  </Typographie>
                )}
                {data.critaire3 && (
                  <Typographie
                    size="h4"
                    balise="h4"
                    theme="gray"
                    className="font-helvetica tracking-wide"
                  >
                    {data.critaire3}
                  </Typographie>
                )}
                {data.critaire4 && (
                  <Typographie
                    size="h4"
                    balise="h4"
                    theme="gray"
                    className="font-helvetica tracking-wide"
                  >
                    {data.critaire4}
                  </Typographie>
                )}
                {data.critaire5 && (
                  <Typographie
                    size="h4"
                    balise="h4"
                    theme="gray"
                    className="font-helvetica tracking-wide"
                  >
                    {data.critaire5}
                  </Typographie>
                )}
                {data.critaire6 && (
                  <Typographie
                    size="h4"
                    balise="h4"
                    theme="gray"
                    className="font-helvetica tracking-wide"
                  >
                    {data.critaire6}
                  </Typographie>
                )}
                {data.critaire7 && (
                  <Typographie
                    size="h4"
                    balise="h4"
                    theme="gray"
                    className="font-helvetica tracking-wide"
                  >
                    {data.critaire7}
                  </Typographie>
                )}
                {data.critaire8 && (
                  <Typographie
                    size="h4"
                    balise="h4"
                    theme="gray"
                    className="font-helvetica tracking-wide"
                  >
                    {data.critaire8}
                  </Typographie>
                )}
              </div>
              {/* <a href={data.stripeLink}>
                <Button variant="demi-link" icon="true" fontFamily="Courier">
                  {data.button}
                </Button>
              </a> */}
              <Checkout
                name={data.title ?? ""}
                amount={data.stripeLink ?? 0}
                id={data.id ?? 0}
              />
            </div>
            <div className="sm:flex hidden border border-black img-pattern align-middle h-5 w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};
