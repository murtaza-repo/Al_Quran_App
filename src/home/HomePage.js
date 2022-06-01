import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";

import pdfImg from "../img/pdf.png";
import videoImg from "../img/video.png";
import audioImg from "../img/audio.png";

export const HomePage = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <ReactTypingEffect
            className="arabic"
            text={[
              "وَلَقَدْ يَسَّرْنَا الْقُرْاٰنَ لِلذِّكْرِ فَهَلْ مِنْ مُّدَّكِرٍ",
            ]}
            speed={1}
            eraseSpeed={0}
          />
        </div>
      </div>
      <div className="container .vertical-center-height fade-in mt-5">
        <div className="row mt-3">
          <div className="col-md-4">
            <Link to={"/pdf"} className="text-decoration-none text-black">
              <div className="card pdf mb-3 align-items-center">
                <img src={pdfImg} className="card-img-top" alt="Logo" />
                <div className="card-body">
                  <p className="card-text">Quran PDF</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"/video"} className="text-decoration-none text-black">
              <div className="card video mb-3 align-items-center">
                <img src={videoImg} className="card-img-top" alt="Logo" />
                <div className="card-body">
                  <p className="card-text">Quran Video</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"/audio"} className="text-decoration-none text-black">
              <div className="card audio mb-3 align-items-center">
                <img src={audioImg} className="card-img-top" alt="Logo" />
                <div className="card-body">
                  <p className="card-text">Quran Audio</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
