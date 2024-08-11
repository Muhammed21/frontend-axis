import { Button } from "@/design-system/button/Button";
import { Typographie } from "@/design-system/typographie/Typographie";
import clsx from "clsx";
import Image from "next/image";
import { useState, useEffect } from "react";
import AnimatedText from "../animated-text/animatedText";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
  id?: number;
  img?: String;
  title?: String;
  content?: String;
  button?: String;
  data?: String;
}

const PROJET_URL = "/api/projet";

const ROUTE = process.env.NEXT_PUBLIC_ROUTE;

export const Projet = ({
  children,
  id,
  img,
  title,
  content,
  button,
  data,
}: Props) => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [table, setTable] = useState<Props[]>([]);
  const [page, setPage] = useState(0);

  const router = useRouter();

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
    <section className="flex flex-col space-y-5 relative z-20">
      <div className="flex flex-row w-max gap-2 items-center align-middle">
        <Image src="/svg/books.svg" width={24} height={24} alt="" />
        <Typographie
          size="h4"
          balise="h4"
          fontFamily="Courier"
          className="cursor-s-resize"
        >
          <AnimatedText>{children}</AnimatedText>
        </Typographie>
      </div>
      <div className="flex sm:flex-row flex-col w-full justify-between items-center sm:gap-0 gap-8">
        {table.map((data, index) => (
          <div
            key={data.id}
            className={clsx(
              "flex flex-col sm:border-r border-r-0 border border-x-0 border-b-1 border-t-0 sm:border-b-0 border-black relative h-max sm:w-max w-full sm:px-3 px-0 sm:pb-0 pb-8 items-start justify-start gap-4 image-container",
              index === 3 && "border-none pr-0 pb-1", // Styles pour le 4er element
              index === 0 && "pl-0" // Styles pour le 1er element
            )}
          >
            <Image
              //   src={data.img}
              src="/images/article-grid.png"
              width={320}
              height={170}
              className="grayscale image sm:w-max w-full"
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
                  fontFamily="MaisonNeue"
                  className="max-w-[280px] leading-5 text-black/85"
                >
                  {data.content}
                </Typographie>
              </div>
              <Link href={`${ROUTE}/projet/${data.id}`}>
                <Button fontFamily="Courier" variant="demi-link" icon="true">
                  {data.button}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
