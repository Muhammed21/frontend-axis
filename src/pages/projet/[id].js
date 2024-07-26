import AnimatedText from "@/components/animated-text/animatedText";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import { Menu } from "@/components/menu/Menu";
import { Separator } from "@/components/separator/Separator";
import { Container } from "@/components/container/Container";
import { Button } from "@/design-system/button/Button";
import { Typographie } from "@/design-system/typographie/Typographie";
import SingleProjet from "@/components/projet/SingleProjet";
import Inner from "../../components/layout/inner";
// import { SinlgeProduct } from "../../components/projet/SingleProjet";

export default function Single({ post }) {
  const router = useRouter();
  const { id } = router.query;

  // Trouver le post correspondant à l'ID
  const data = post.find((item) => item.id.toString() === id);
  console.log(data);

  return <Inner>{data ? <SingleProjet title={data.title} /> : ""}</Inner>;
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://backend-axis-studio.vercel.app/api/projet/?id=${params.id}`
  );
  const post = await res.json();

  return { props: { post } };
}
