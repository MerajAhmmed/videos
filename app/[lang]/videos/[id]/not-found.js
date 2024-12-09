"use client";

import { useParams } from "next/navigation";

export default function NotfoundPage() {
  const params = useParams();
  return <div>{`This video with ${params.id} id was not found!`}</div>;
}
