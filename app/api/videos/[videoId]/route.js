import videos from "../../../../data/videos.json";

export async function GET(request, { params }) {
  const id = params.videoId;
  const videoData = videos.find((video) => video.videoId === id);
  return Response.json(videoData);
}

export async function PATCH(request, { params }) {
  const videoData = await request.json();
  const id = params.videoId;
  const videoDataIndex = videos.findIndex((video) => video.videoId === id);

  videos[videoDataIndex] = { ...videos[videoDataIndex], ...videoData };
  return Response.json(videos[videoDataIndex]);
}

export async function DELETE(request, { params }) {
  const id = params.videoId;
  const videoDataIndex = videos.findIndex((video) => video.videoId === id);
  const deletedVideo = videos[videoDataIndex];
  videos.splice(videoDataIndex, 1);
  return Response.json(deletedVideo);
}
