import React from "react";

export const YouTubePlayer = ({videoId}) => {
  return (
    <iframe
      id="ytplayer"
      type="text/html"
      style={{
        height: "20rem",
        width: "100%",
      }}
      title={"sdcs"}
      allowFullScreen
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      frameBorder="0"
    ></iframe>
  );
};
