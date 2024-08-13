import Inner from "@/components/layout/inner";
import { Menu } from "@/components/menu/Menu";
import { Container } from "@/components/container/Container";
import { Typographie } from "@/design-system/typographie/Typographie";
import Image from "next/image";
import { Button } from "@/design-system/button/Button";
import { Separator } from "@/components/separator/Separator";
import AnimatedText from "@/components/animated-text/animatedText";
import { useEffect, useState } from "react";
import { Props } from "next/script";

const TARIF_URL = "/api/tarif";

const customePlan = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [addedItems, setAddedItems] = useState<number[]>([]);
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

  const toggleItem = (index: number, amount: number) => {
    if (addedItems.includes(index)) {
      // Si l'élément est déjà ajouté, le retirer
      setTotalPrice(totalPrice - amount);
      setAddedItems(addedItems.filter((item) => item !== index));
    } else {
      // Sinon, l'ajouter
      setTotalPrice(totalPrice + amount);
      setAddedItems([...addedItems, index]);
    }
  };

  return (
    <Inner>
      <Container>
        <Menu at="Nous contacter" link="/">
          Axis Studio
        </Menu>
        <div className="flex flex-col space-y-5 relative pb-7">
          <div className="flex flex-row w-max gap-2 items-center align-middle">
            <Image src="/svg/books.svg" width={24} height={24} alt="" />
            <Typographie
              size="h4"
              balise="h4"
              fontFamily="Courier"
              className="cursor-s-resize"
            >
              <AnimatedText>Nombre de page(s)</AnimatedText>
            </Typographie>
          </div>

          <div className="flex flex-row gap-y-3 flex-wrap w-full justify-between">
            {[400, 240, 240, 240].map((price, index, data) => (
              <div
                key={index}
                className={`flex flex-col gap-6 border border-black p-4 items-start lg:w-[320px] w-full h-max ${
                  addedItems.includes(index) ? "bg-gray-200" : ""
                }`}
              >
                <div className="flex flex-col gap-2">
                  <Typographie
                    fontFamily="CooperLight"
                    className="text-[20px] md:text-h2"
                  >
                    Logo
                  </Typographie>

                  <Typographie
                    size="h5"
                    balise="h5"
                    theme="black"
                    fontFamily="Courier"
                  >
                    Un site singlepage est idéal pour les personnes cherchant à
                    faire un tunnel de vente
                  </Typographie>
                </div>
                <div className="flex flex-col gap-3">
                  <Typographie
                    size="h4"
                    balise="h4"
                    theme="gray"
                    className="flex flex-row gap-3"
                  >
                    <Image
                      src="/svg/Circuit-gray.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    Fichier haute résolution
                  </Typographie>
                  <Typographie
                    size="h4"
                    balise="h4"
                    theme="gray"
                    className="flex flex-row gap-3"
                  >
                    <Image
                      src="/svg/Circuit-gray.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    Cohérence visuelle
                  </Typographie>
                  <Typographie
                    size="h4"
                    balise="h4"
                    theme="gray"
                    className="flex flex-row gap-3"
                  >
                    <Image
                      src="/svg/Circuit-gray.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    Design sur mesure
                  </Typographie>
                </div>
                <Button
                  variant="link"
                  icon="true"
                  fontFamily="Courier"
                  className="z-30"
                  onClick={() => toggleItem(index, price)}
                >
                  {addedItems.includes(index)
                    ? "Selectionné " + price + "€"
                    : "+ EUR " + price + "€"}
                </Button>
              </div>
            ))}
          </div>
        </div>
        <Separator variant="prix" totalPrice={totalPrice} />
      </Container>
    </Inner>
  );
};

export default customePlan;
