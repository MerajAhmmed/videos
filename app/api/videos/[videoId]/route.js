import videos from "../../../../data/videos.json";

export async function GET(request, { params }) {
  const id = params.videoId;
  const videoData = videos.find((video) => video.videoId === id);
  return Response.json(videoData);
}

export async function PATCH(request, { params }) {
  const videoData = await request.json();
  const id = params.videoId;

  const allowedFields = ["title", "description"];

  const incomingFields = Object.keys(videoData);
  const invalidFields = incomingFields.filter(
    (field) => !allowedFields.includes(field)
  );

  if (invalidFields.length > 0) {
    return new Response(
      JSON.stringify({
        error: `Invalid field(s): ${invalidFields.join(
          ", "
        )}. Only 'title' and 'description' can be updated.`,
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const videoDataIndex = videos.findIndex((video) => video.videoId === id);

  if (videoDataIndex === -1) {
    return new Response(JSON.stringify({ error: "Video not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
  const updatedVideo = { ...videos[videoDataIndex], ...videoData };
  videos[videoDataIndex] = updatedVideo;

  return new Response(JSON.stringify(updatedVideo), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(request, { params }) {
  const id = params.videoId;
  const videoDataIndex = videos.findIndex((video) => video.videoId === id);
  const deletedVideo = videos[videoDataIndex];
  videos.splice(videoDataIndex, 1);
  return Response.json(deletedVideo);
}
