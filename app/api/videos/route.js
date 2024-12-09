import videos from "../../../data/videos.json";

export async function GET() {
  return Response.json(videos);
}
