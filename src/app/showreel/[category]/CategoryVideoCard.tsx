"use client";

import { useState } from "react";
import type { ShowreelVideo } from "@/lib/showreel";

function formatDuration(totalSeconds: number) {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) {
    return "00:00";
  }

  const rounded = Math.round(totalSeconds);
  const minutes = Math.floor(rounded / 60);
  const seconds = rounded % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function CategoryVideoCard({ video }: { video: ShowreelVideo }) {
  const [duration, setDuration] = useState(video.duration);
  const [isPortrait, setIsPortrait] = useState(video.orientation === "portrait");

  return (
    <article className="category-video-card">
      <div className={`video-wrap ${isPortrait ? "is-portrait" : "is-landscape"}`}>
        <video
          className="category-video"
          controls
          playsInline
          poster={video.poster}
          preload="metadata"
          onLoadedMetadata={(event) => {
            const media = event.currentTarget;
            setDuration(formatDuration(media.duration));
            if (media.videoWidth > 0 && media.videoHeight > 0) {
              setIsPortrait(media.videoHeight > media.videoWidth);
            }
          }}
        >
          <source src={video.src} type={video.src.endsWith(".m4v") ? "video/x-m4v" : "video/mp4"} />
        </video>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">{video.title}</h2>
        <span className="video-pill">{duration}</span>
      </div>
      <p className="mt-2 text-zinc-300">{video.noteCs}</p>
      <p className="text-zinc-500">{video.noteEn}</p>
    </article>
  );
}
