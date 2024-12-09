import HeroSection from "@/components/HeroSection";
import VideoList from "@/components/VideoList";

export default function Home({ params: { lang } }) {
  return (
    <div>
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
        <HeroSection lang={lang} />
      </main>
      <section className="mt-12">
        <VideoList lang={lang} />
      </section>
    </div>
  );
}
