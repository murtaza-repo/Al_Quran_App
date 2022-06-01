import React from "react";
import { useVideos } from "./useVideos";
import { YouTubePlayer } from '../video';
import { VideoList } from '../video';
import { useLocation } from "react-router-dom";

export const VideoPage = () => {
  const { isLoading, data } = useVideos();


  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const videoId = params.get('videoId') ? params.get('videoId') : data.videoIds[0];

  return (
    <>
      <div className="container mt-3" style={{ marginBottom: "5rem" }}>
        <div className="row">
          {isLoading ? (
            <div className="spinner-border " role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              <div className="col-md-6">
                <YouTubePlayer videoId={videoId} />
              </div>
              <div className="col-md-6">
                <VideoList data={data}/>
              </div>
            </>
          )}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
