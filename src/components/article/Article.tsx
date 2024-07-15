import { Button } from "@/design-system/button/Button";
import { Typographie } from "@/design-system/typographie/Typographie";
import clsx from "clsx";
import { useState, useEffect } from "react";
import AnimatedText from "../animated-text/animatedText";
import Image from "next/image";

const ARTICLE_URL = "/api/article";

interface Props {
  children: React.ReactNode;
  id?: number;
  badge?: string;
  title?: string;
  content?: string;
  button?: string;
}

export const Article = ({
  children,
  id,
  badge,
  title,
  content,
  button,
}: Props) => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [table, setTable] = useState<Props[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${ARTICLE_URL}?page=${page}`);
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
  // Vérification des états de chargement et d'erreur après l'appel de tous les hooks
  if (isLoading) {
    return (
      <div className="flex w-full h-max justify-center items-center">
        <Button variant="button" icon="true" isLoading>
          Chargement en cours
        </Button>
      </div>
    );
  }
  return (
    <section className="flex flex-col w-full justify-between space-y-5">
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
      <div className="flex flex-row">
        {table.map((data, index) => (
          <div
            key={data.id}
            className={clsx(
              "flex flex-col relative space-y-4 border-r border-black px-3 items-start justify-start w-full max-w-[330px] space-x-4",
              index === 0 && "pl-0",
              index === 3 && "border-r-0"
            )}
          >
            <div className="flex relative flex-col items-start justify-between align-top h-max space-y-5">
              <div className="bg-badge/20 px-1.5 py-1 w-max h-max">
                <Typographie size="h5" balise="h5" theme="gray">
                  {data.badge}
                </Typographie>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <Typographie
                  fontFamily="Cooper"
                  size="h2"
                  balise="h2"
                  theme="black"
                >
                  {data.title}
                </Typographie>
                <Typographie
                  size="h5"
                  balise="h5"
                  fontFamily="MaisonNeue"
                  className=" w-full max-w-[295px] leading-5 text-black/85"
                >
                  {data.content}
                </Typographie>
              </div>
              <Button fontFamily="Courier" variant="demi-link" icon="true">
                {data.button}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
