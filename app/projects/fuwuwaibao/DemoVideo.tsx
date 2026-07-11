"use client";

import { useEffect, useRef, useState } from "react";

export default function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasStarted) return;

    video.muted = true;
    video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }, [hasStarted]);

  function toggleVideo() {
    const video = videoRef.current;
    if (!hasStarted) {
      setHasStarted(true);
      return;
    }

    if (video && !video.paused) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    video?.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }

  return (
    <figure className="video-panel">
      <div className="video-wrap">
        {hasStarted ? (
          <video
            ref={videoRef}
            controls
            muted
            playsInline
            poster="/project-assets/fuwuwaibao-architecture.png"
            preload="none"
            src="/project-assets/fuwuwaibao-demo.mp4"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/project-assets/fuwuwaibao-demo.mp4" type="video/mp4" />
          </video>
        ) : (
          <button className="video-cover" type="button" onClick={toggleVideo}>
            <img src="/project-assets/fuwuwaibao-architecture.png" alt="泛雅 AI 智课系统视频封面" loading="lazy" decoding="async" />
            <span>播放演示视频</span>
          </button>
        )}
        {hasStarted && !isPlaying && (
          <button className="video-play-button" type="button" onClick={toggleVideo}>
            播放演示视频
          </button>
        )}
      </div>
      <figcaption>
        <span>泛雅 AI 智课系统演示视频</span>
        <a href="/project-assets/fuwuwaibao-demo.mp4" target="_blank" rel="noreferrer">
          新标签打开视频
        </a>
      </figcaption>
    </figure>
  );
}
