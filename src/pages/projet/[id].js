import { useRouter } from "next/router";
import SingleProjet from "@/components/projet/SingleProjet";

export default function Single({ post }) {
  const router = useRouter();
  const { id } = router.query;

  // Trouver le post correspondant à l'ID
  const data = post.find((item) => item.id.toString() === id);
  console.log(data);

  if (!data) {
    return (
      <div>
        <SingleProjet title="Axis Studio" />
      </div>
    );
  }

  return (
    <div>
      <SingleProjet title={data.title} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://backend-axis-studio.vercel.app/api/projet/?id=${params.id}`
  );

  if (!res.ok) {
    return { notFound: true };
  }

  const post = await res.json();

  // Si le post est vide ou n'existe pas
  if (!post || post.length === 0) {
    return { notFound: true };
  }

  return { props: { post } };
}
