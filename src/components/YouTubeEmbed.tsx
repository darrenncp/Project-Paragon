'use client';

import { useState } from 'react';
import YouTube from 'react-youtube';
import { Play, Loader } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  const handleReady = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="aspect-video bg-black flex items-center justify-center rounded-lg">
        <div className="text-center text-white">
          <Play className="w-16 h-16 mx-auto mb-4 text-gray-500" />
          <p className="text-lg mb-2">Video Unavailable</p>
          <p className="text-sm text-gray-400">
            {title || 'Unable to load video content'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="text-center text-white">
            <Loader className="w-8 h-8 mx-auto mb-2 animate-spin" />
            <p className="text-sm text-gray-400">Loading video...</p>
          </div>
        </div>
      )}
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={handleReady}
        onError={handleError}
        className="w-full h-full"
        iframeClassName="w-full h-full"
      />
    </div>
  );
}
