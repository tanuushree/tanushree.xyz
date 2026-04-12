import WritingHero       from "@/components/WritingHero";
import Publications      from "@/components/Publication";
import TechnicalWritings from "@/components/TechnicalWriting";
import Poems             from "@/components/Poems";

export default function WritingPage() {
  return (
    <>
      <WritingHero />
      <Publications />
      <TechnicalWritings />
      <Poems />
    </>
  );
}