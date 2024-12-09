import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Image from "next/image";
import Link from "next/link";
export default async function VideoList({ lang }) {
  const dict = await getDictionary(lang);
  const { default: videos } = await import("../data/videos.json");
  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{dict.StreamsOfTheDay}</h2>
        <Link
          href="#"
          className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
        >
          {dict.ViewAll}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <Link
            href={`/videos/${video.videoId}`}
            className="rounded-lg overflow-hidden bg-color-gray"
            key={video.videoId}
          >
            <Image
              src={video.thumbnail}
              alt="Stream 1"
              className="w-full h-40 object-cover"
              height={100}
              width={100}
            />
            <div className="p-2">
              <p className="font-semibold">{video.title}</p>
              <p className="text-sm text-gray-400">{video.channelTitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
