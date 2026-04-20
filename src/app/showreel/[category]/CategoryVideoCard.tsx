"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import type { ShowreelVideo } from "@/lib/showreel";

export function CategoryVideoCard({ video }: { video: ShowreelVideo }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const isPortrait = video.orientation === "portrait";
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <article className="category-video-card">
      <div className={`video-wrap ${isPortrait ? "is-portrait" : "is-landscape"}`}>
        {isPlaying ? (
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="category-video youtube-embed"
            src={embedUrl}
            title={video.title}
          />
        ) : (
          <button
            aria-label={`Přehrát video ${video.title}`}
            className="youtube-thumbnail"
            onClick={() => setIsPlaying(true)}
            type="button"
          >
            <img alt="" className="category-video" src={thumbnailUrl} />
            <span className="youtube-play" aria-hidden="true" />
          </button>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">{video.title}</h2>
        {video.duration ? <span className="video-pill">{video.duration}</span> : null}
      </div>
      <p className="mt-2 text-zinc-300">{video.noteCs}</p>
      <p className="text-zinc-500">{video.noteEn}</p>
    </article>
  );
}
