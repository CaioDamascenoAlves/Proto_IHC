// useUserMedia.js
import { useState, useEffect } from "react";

export const useUserMedia = (constraints) => {
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function enableStream() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        setStream(mediaStream);
      } catch (err) {
        setError(err);
      }
    }

    if (!stream) {
      enableStream();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream, constraints]);

  return { stream, error };
};
