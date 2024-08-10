import { useState, useEffect } from "react";
import localFont from "next/font/local";
import { Typographie } from "@/design-system/typographie/Typographie";
import { Button } from "@/design-system/button/Button";
import { Separator } from "../separator/Separator";
import Link from "next/link";
import Image from "next/image";

const HEADER_URL = "/api/proxy";

const ROUTE = process.env.NEXT_PUBLIC_ROUTE;

interface Props {
  id?: number;
  slogan?: string;
  brand?: string;
  at?: string;
  header?: string;
  mail?: string;
  link?: string;
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
  link,
}: Props) => {
  return (
    <section className="relative z-10 flex flex-col gap-y-10 w-full items-center h-max pt-8">
      <div className="w-full">
        <div className="sm:flex hidden w-full flex-row items-center align-middle relative gap-5">
          <div className="flex w-max whitespace-nowrap">
            <Typographie
              fontFamily="Cooper"
              size="h4"
              balise="h4"
              theme="black"
              className="flex flex-row tracking-wide gap-1 items-center align-middle"
            >
              <span className="font-courier">✦</span> 300+ fondateurs{" "}
              <div className="flex flex-row -space-x-2">
                <Image
                  src="/images/profil.jpg"
                  alt=""
                  width={22}
                  height={22}
                  className="rounded-full border-2 border-white z-0"
                />{" "}
                <Image
                  src="/images/profil.jpg"
                  alt=""
                  width={22}
                  height={22}
                  className="rounded-full border-2 border-white z-10"
                />{" "}
                <Image
                  src="/images/profil.jpg"
                  alt=""
                  width={22}
                  height={22}
                  className="rounded-full border-2 border-white z-20"
                />{" "}
              </div>
              nous on fait confiance <span className="font-courier">✦</span>
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
              className="flex"
            >
              {children}
              <span className="text-h4">®</span>
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
            <Link href={`${ROUTE}/projet/1`} className="h-[20px]">
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
                className={`text-sm underline underline-from-left cursor-pointer underline-offset-2`}
              >
                Medium
              </Typographie>
            </Link>
            <Typographie
              fontFamily="Cooper"
              size="h4"
              balise="h4"
              theme="black"
            >
              -
            </Typographie>
            <Link href="/" className="h-[20px]">
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
                className={`text-sm underline underline-from-left cursor-pointer underline-offset-2`}
              >
                Medium
              </Typographie>
            </Link>
            <Typographie
              fontFamily="Cooper"
              size="h4"
              balise="h4"
              theme="black"
            >
              -
            </Typographie>
            <Link href="/projet/1" className="h-[20px]">
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
                className={`text-sm underline underline-from-left cursor-pointer underline-offset-2`}
              >
                Medium
              </Typographie>
            </Link>
          </div>
        </div>
        {/* partie mobile */}
        <div className="sm:hidden flex flex-col gap-5 w-full items-center">
          <div className="flex w-max whitespace-nowrap">
            <Typographie
              fontFamily="Cooper"
              size="h4"
              balise="h4"
              theme="black"
              className="flex flex-row tracking-wide gap-1 items-center align-middle"
            >
              <span className="font-courier">✦</span> 300+ fondateurs{" "}
              <div className="flex flex-row -space-x-2">
                <Image
                  src="/images/profil.jpg"
                  alt=""
                  width={22}
                  height={22}
                  className="rounded-full border-2 border-white z-0"
                />{" "}
                <Image
                  src="/images/profil.jpg"
                  alt=""
                  width={22}
                  height={22}
                  className="rounded-full border-2 border-white z-10"
                />{" "}
                <Image
                  src="/images/profil.jpg"
                  alt=""
                  width={22}
                  height={22}
                  className="rounded-full border-2 border-white z-20"
                />{" "}
              </div>
              nous on fait confiance <span className="font-courier">✦</span>
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
              className="flex"
            >
              {children}
              <span className="text-h3">®</span>
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
            <Link href="/projet/2" className="h-[20px]">
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
                className={`text-sm underline underline-from-left cursor-pointer underline-offset-2`}
              >
                Medium
              </Typographie>
            </Link>
            <Typographie
              fontFamily="Cooper"
              size="h4"
              balise="h4"
              theme="black"
            >
              -
            </Typographie>
            <Link href="/" className="h-[20px]">
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
                className={`text-sm underline underline-from-left cursor-pointer underline-offset-2`}
              >
                Medium
              </Typographie>
            </Link>
            <Typographie
              fontFamily="Cooper"
              size="h4"
              balise="h4"
              theme="black"
            >
              -
            </Typographie>
            <Link href="/projet/1" className="h-[20px] z-30">
              <Typographie
                fontFamily="Cooper"
                size="h4"
                balise="h4"
                theme="black"
                className={`text-sm underline underline-from-left cursor-pointer underline-offset-2`}
              >
                Medium
              </Typographie>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex w-full pb-4 items-center justify-center align-middle">
        <Separator variant="simple" border="large" />
        <div className="absolute bg-white z-10">
          <Button
            variant="button"
            className=""
            icon="false"
            fontFamily="Cooper"
          >
            {link && <Link href={link}>{at}</Link>}
          </Button>
        </div>
      </div>
    </section>
  );
};
