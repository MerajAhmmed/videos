import PlayVideo from "@/components/videoPage/PlayVideo";
import VideoSideBar from "@/components/videoPage/VideoSideBar";
import { getDictionary } from "../../dictionaries/dictionaries";

export default async function Page({ params: { lang, id } }) {
  const { default: videos } = await import("../../../../data/videos.json");
  const dict = await getDictionary(lang);

  const matchVideo = videos.find((video) => video.videoId === id);

  return (
    <main className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-3/4">
        <PlayVideo lang={lang} dict={dict} matchVideo={matchVideo} />
      </div>
      <VideoSideBar lang={lang} />
    </main>
  );
}
