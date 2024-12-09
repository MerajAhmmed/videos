import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Image from "next/image";

export default async function VideoSideBar({ lang }) {
  const { default: videos } = await import("../../data/videos.json");
  const videosToShow = videos.slice(0, 7);
  const dict = await getDictionary(lang);
  return (
    <div className="lg:w-1/4">
      <h2 className="text-xl font-semibold mb-4">{dict.YouMayLike}</h2>
      <div className="space-y-4">
        {videosToShow.map((video) => (
          <div className="flex items-start space-x-4" key={video.videoId}>
            <Image
              src={video.thumbnail}
              alt="Fallout Shelter PC Thumbnail"
              className="w-30 h-20 rounded object-cover"
              height={100}
              width={100}
            />
            <div>
              <h3 className="font-semibold">{video.title}</h3>
              <p className="text-sm text-gray-400">{video.channelTitle}</p>
              <p className="text-sm text-gray-400">26,389M</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
