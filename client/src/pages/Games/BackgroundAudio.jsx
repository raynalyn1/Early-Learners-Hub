import React, { useEffect, useRef } from "react";
import Audio from '../../Audio/backgroundAudio.mp3';

const BackgroundAudio = ({ loop = true, volume = 0.5 }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.play().catch((error) => {
        console.error("Autoplay blocked: User interaction required to play audio", error);
      });
    }
  }, [volume]);

  return <audio ref={audioRef} src={Audio} loop={loop} />;
};

export default BackgroundAudio;
