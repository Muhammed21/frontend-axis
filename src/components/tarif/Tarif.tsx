import { Button } from "@/design-system/button/Button";
import { Typographie } from "@/design-system/typographie/Typographie";
import AnimatedText from "../animated-text/animatedText";
import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";

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
  price?: string;
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
  price,
  imgTop,
  populaire,
}: Props) => {
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
      <div className="flex flex-row w-full justify-between">
        {table.map((data, index) => (
          <div
            className={clsx(
              "flex flex-col items-start max-w-[330px] w-full space-y-4 border-r px-4 border-black",
              index === 0 && "pl-0",
              index === 3 && "border-none pr-0"
            )}
          >
            <div className="border border-black img-pattern align-middle h-11 w-full" />
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Typographie size="h2" balise="h2" fontFamily="Cooper">
                  {data.title}
                </Typographie>
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
              <Button variant="demi-link" icon="true" fontFamily="Courier">
                {data.price}
              </Button>
            </div>
            <div className="border border-black img-pattern align-middle h-5 w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};
