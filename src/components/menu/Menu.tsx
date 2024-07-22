import { useState, useEffect } from "react";
import localFont from "next/font/local";
import { Typographie } from "@/design-system/typographie/Typographie";
import { Button } from "@/design-system/button/Button";
import { Separator } from "../separator/Separator";

const HEADER_URL = "/api/proxy";

interface Props {
  id?: number;
  slogan?: string;
  brand?: string;
  at?: string;
  header?: string;
  mail?: string;
  children?: React.ReactNode;
}

export const Menu = ({
  id,
  slogan,
  brand,
  at,
  header,
  mail,
  children,
}: Props) => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [table, setTable] = useState<Props[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${HEADER_URL}?page=${page}`);
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
    <section className="flex flex-col gap-y-10 w-full items-center h-max">
      {table.map((data) => (
        <div key={data.id} className="w-full">
          <div className="sm:flex hidden w-full flex-row items-center align-middle relative gap-5">
            <div className="flex w-max whitespace-nowrap">
              <Typographie
                fontFamily="Courier"
                size="h4"
                balise="h4"
                theme="black"
              >
                {data.slogan}
              </Typographie>
            </div>
            <hr className="flex-1 sm:mx-4 ml-0 mr-4 border-[0.7px] border-black" />
            <div className="sm:absolute relative left-1/2 px-5 transform -translate-x-1/2 bg-white">
              <Typographie
                fontFamily="CooperLight"
                size="h2"
                balise="h2"
                theme="black"
                weight="light"
              >
                {children}
              </Typographie>
            </div>
            <hr className="sm:flex-1 hidden sm:mx-4 ml-4 mr-0 border-[0.7px] border-black" />
            <div className="sm:flex hidden w-max whitespace-nowrap gap-2.5 items-end justify-end align-middle">
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
                className="text-sm underline underline-from-left cursor-pointer underline-offset-2"
              >
                Medium
              </Typographie>
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
              >
                -
              </Typographie>
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
                className={`text-sm underline underline-from-left cursor-pointer underline-offset-2`}
              >
                Medium
              </Typographie>
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
              >
                -
              </Typographie>
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
                className={`text-sm underline underline-from-left cursor-pointer underline-offset-2`}
              >
                Medium
              </Typographie>
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
              >
                -
              </Typographie>
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
                className={`text-sm underline underline-from-left cursor-pointer underline-offset-2`}
              >
                Medium
              </Typographie>
            </div>
          </div>
          {/* partie mobile */}
          <div className="sm:hidden flex flex-col gap-5 w-full items-center">
            <div className="flex w-max whitespace-nowrap">
              <Typographie
                fontFamily="Courier"
                size="h4"
                balise="h4"
                theme="black"
              >
                {data.slogan}
              </Typographie>
            </div>
            <Separator variant="simple" border="fine" />
            <div className="relative">
              <Typographie
                fontFamily="CooperLight"
                size="h2"
                balise="h2"
                theme="black"
                weight="light"
              >
                {children}
              </Typographie>
            </div>
            <Separator variant="simple" border="fine" />
            <div className="flex flex-row w-max whitespace-nowrap gap-2.5 items-end justify-end align-middle">
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
                className="text-sm underline underline-from-left cursor-pointer underline-offset-2"
              >
                Medium
              </Typographie>
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
              >
                -
              </Typographie>
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
                className={`text-sm underline underline-from-left cursor-pointer underline-offset-2`}
              >
                Medium
              </Typographie>
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
              >
                -
              </Typographie>
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
                className={`text-sm underline underline-from-left cursor-pointer underline-offset-2`}
              >
                Medium
              </Typographie>
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
              >
                -
              </Typographie>
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
                className={`text-sm underline underline-from-left cursor-pointer underline-offset-2`}
              >
                Medium
              </Typographie>
            </div>
          </div>
        </div>
      ))}
      {table.map((data) => (
        <div
          key={data.id}
          className="relative flex w-full items-center justify-center align-middle"
        >
          <Separator variant="simple" border="large" />
          <div className="absolute bg-white z-10">
            <Button
              variant="button"
              className=""
              icon="false"
              fontFamily="Cooper"
            >
              {data.at}
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};
