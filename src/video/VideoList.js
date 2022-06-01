import React from "react";
import { Link } from "react-router-dom";
import thumbnail from "../img/play.png";

export const VideoList = ({ data}) => {
  return (
    <>
      <ul className="list-group">
        {data.titles.map((title, index) => {
          return (
            <Link
              to={`/video?videoId=${data.videoIds[index]}`}
              className="list-group-item list-group-item-action"
              key={index}
            >
              <span>
                <img
                  src={thumbnail}
                  width={"35px"}
                  style={{ marginRight: "10px" }}
                  alt="video"
                />
              </span>
              {title}
            </Link>
          );
        })}
      </ul>
    </>
  );
};
