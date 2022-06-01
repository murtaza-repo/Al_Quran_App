import React from "react";
import { useVideos } from "./useVideos";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { BackButton } from "../ui";

export const VideoPage = () => {
  const { isLoading, data } = useVideos();

  return (
    <>
      <BackButton />
      <div className="container mt-3" style={{ marginBottom: "5rem" }}>
        <div className="row">
          <div className="col text-center" style={{ color: "crimson" }}>
            {isLoading ? (
              <div class="spinner-border " role="status">
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              <Accordion allowZeroExpanded className="accordion">
                {data.titles.map((title, index) => (
                  <AccordionItem key={index}>
                    <AccordionItemHeading>
                      <AccordionItemButton>{title}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <iframe
                        id="ytplayer"
                        type="text/html"
                        height="360"
                        title={index}
                        allowFullScreen
                        src={`https://www.youtube.com/embed/${data.videoIds[index]}?autoplay=1&fs=1&origin=http://example.com`}
                        frameborder="0"
                      ></iframe>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
