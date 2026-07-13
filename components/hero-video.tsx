"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// Replicates the original Framer "play on scroll" behavior: the video plays
// while in the viewport and pauses when scrolled away. The source URL comes
// from NEXT_PUBLIC_HERO_VIDEO_URL (external CDN — Mux/Cloudflare Stream/Bunny).
const VISIBILITY_THRESHOLD = 0.4;

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const videoUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            // Autoplay can be blocked by the browser; the poster frame stays.
          });
        } else {
          video.pause();
        }
      },
      { threshold: VISIBILITY_THRESHOLD }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  if (!videoUrl) return null;

  return (
    <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl shadow-soft">
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Collage AI product preview"
        className="h-auto w-full"
      />
    </div>
  );
}
