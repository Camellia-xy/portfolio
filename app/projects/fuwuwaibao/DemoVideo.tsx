"use client";

import { useRef, useState } from "react";

export default function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = true;
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <figure className="video-panel">
      <div className="video-wrap">
        <video
          ref={videoRef}
          controls
          muted
          playsInline
          poster="/project-assets/fuwuwaibao-architecture.png"
          preload="metadata"
          src="/project-assets/fuwuwaibao-demo.mp4"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/project-assets/fuwuwaibao-demo.mp4" type="video/mp4" />
        </video>
        {!isPlaying && (
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
