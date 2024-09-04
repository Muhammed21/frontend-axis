import { Container } from "@/components/container/Container";
import Inner from "@/components/layout/inner";
import { Menu } from "@/components/menu/Menu";
import { Statut } from "@/components/statut/Statut";

const FolderSearch = () => {
  return (
    <Inner>
      <Container>
        <Menu at="Demander de l'aide" link="/">
          Suivi de dossier
        </Menu>
        <Statut />
      </Container>
    </Inner>
  );
};

export default FolderSearch;
