import More from "./_sections/more";
import ActualAbout from "./_sections/actualAbout";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ActualAbout />
      <More />
    </main>
  );
}
