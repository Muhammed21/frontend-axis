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
  const [openArticleId, setOpenArticleId] = useState<number | null>(null); // ID de l'article ouvert

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

  const toggleArticle = (id: number) => {
    // Si l'article cliqué est déjà ouvert, on le ferme
    if (openArticleId === id) {
      setOpenArticleId(null);
    } else {
      setOpenArticleId(id);
    }
  };

  return (
    <section className="flex flex-col w-full justify-between space-y-5">
      <div className="flex flex-row w-max gap-2 items-center align-middle">
        <Image src="/svg/Certificate.svg" width={24} height={24} alt="" />
        <Typographie
          size="h4"
          balise="h4"
          fontFamily="Courier"
          className="cursor-s-resize"
        >
          <AnimatedText>{children}</AnimatedText>
        </Typographie>
      </div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-8">
        {table.map((data, index) => (
          <div
            key={data.id}
            className={clsx(
              "flex flex-col relative space-y-4 md:border-r border-r-0 border-x-0 border border-b-1 border-t-0 pb-8 md:pb-0 md:border-b-0 border-black md:px-3 px-0 items-start justify-start w-full md:max-w-[330px] space-x-4",
              index === 0 && "pl-0",
              index === 3 && "border-none pb-0.5"
            )}
          >
            <div className="flex relative flex-col items-start justify-between align-top h-max space-y-3.5">
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
                  className=" w-full md:max-w-[295px] leading-5 text-black/85"
                >
                  {data.content}
                </Typographie>
              </div>
              {/* Menu déroulant */}
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  openArticleId === data.id ? "max-h-screen" : "max-h-0"
                )}
              >
                <div className="bg-[#37373713] p-1.5 rounded-sm border-gray border border-dashed">
                  <Typographie
                    size="h5"
                    balise="h5"
                    fontFamily="MaisonNeue"
                    className=" w-full md:max-w-[295px] leading-5 text-black/85"
                  >
                    {data.content}
                  </Typographie>
                </div>
              </div>
              {/* Bouton pour afficher/masquer le menu */}
              <div
                className="flex flex-row gap-2 items-center align-middle justify-center"
                onClick={() => toggleArticle(data.id!)}
              >
                <Image
                  src="/svg/Arrow.svg"
                  alt=""
                  width={22}
                  height={22}
                  className={clsx(
                    openArticleId === data.id ? "rotate-0" : "rotate-90"
                  )}
                />
                <Typographie
                  fontFamily="Courier"
                  size="h4"
                  balise="h4"
                  className="underline-from-left-projet text-black underline cursor-pointer"
                >
                  {openArticleId === data.id ? "Voir moins" : data.button}
                </Typographie>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
