import PlayVideo from "@/components/videoPage/PlayVideo";
import VideoSideBar from "@/components/videoPage/VideoSideBar";

export default function Page({ params: { lang } }) {
  return (
    <main className="flex flex-col lg:flex-row gap-6">
      <PlayVideo lang={lang} />
      <VideoSideBar lang={lang} />
    </main>
  );
}
