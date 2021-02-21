import { Container } from "src/components/Container";
import { ShortLetters } from "src/components/ShortLetters";
import { Timeline } from "src/components/Timeline";

export default function Home() {
  return (
    <Container>
      <ShortLetters />
      <Timeline />
    </Container>
  );
}
