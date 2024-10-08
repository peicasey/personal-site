import ActualAbout from "./_sections/actualAbout";
import Experience from "./_sections/experience";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ActualAbout />
      <Experience />
    </main>
  );
}
