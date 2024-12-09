import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Modal from "@/components/Modal";
import PlayVideo from "@/components/videoPage/PlayVideo";

export default async function Modalpage({ params }) {
  const { lang, id } = params;
  const { default: videos } = await import("../../../../../data/videos.json");
  const dict = await getDictionary(lang);

  const matchVideo = videos.find((video) => video.videoId === id);
  if (!matchVideo) {
    notFound();
  }
  return (
    <>
      <Modal>
        <PlayVideo dict={dict} matchVideo={matchVideo} />
      </Modal>
    </>
  );
}
