import { Button } from "@/design-system/button/Button";
import { Typographie } from "@/design-system/typographie/Typographie";
import clsx from "clsx";
import Image from "next/image";
import { useState, useEffect } from "react";
import AnimatedText from "../animated-text/animatedText";

interface Props {
  children: React.ReactNode;
  id?: number;
  img?: String;
  title?: String;
  content?: String;
  button?: String;
}

const PROJET_URL = "/api/projet";

export const Projet = ({
  children,
  id,
  img,
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
        const res = await fetch(`${PROJET_URL}?page=${page}`);
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
    <section className="flex flex-col space-y-5">
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
            key={data.id}
            className={clsx(
              "flex flex-col border-r border-black relative h-max w-max px-3 items-start justify-start gap-4",
              index === 3 && "border-none pr-0", // Styles pour le 4er element
              index === 0 && "pl-0" // Styles pour le 1er element
            )}
          >
            <Image
              //   src={data.img}
              src="/images/Readability.png"
              width={320}
              height={170}
              alt=""
            />
            <div className="flex flex-col items-start justify-between align-top h-[140px]">
              <div className="flex flex-col items-start gap-2">
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
                  fontFamily="Courier"
                  theme="black"
                  className="max-w-[280px] leading-5"
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
