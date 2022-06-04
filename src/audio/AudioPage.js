import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";


// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export const AudioPage = () => {
  const data = {
    titles: Array(30)
      .fill()
      .map((_, i) => {
        return `Quran Juz Sipara ${i + 1}`;
      }),
    audioSrc: Array(30)
      .fill()
      .map((_, i) => {
        return `https://firebasestorage.googleapis.com/v0/b/alquran5.appspot.com/o/QuranAudio%2FQuran%20Juz%20${
          i + 1
        }.mp3?alt=media`;
      }),
  };

  return (
    <>
      <div className="container mt-3" style={{ marginBottom: "5rem" }}>
        <div className="row">
          <div className="col text-center" style={{ color: "crimson" }}>
            <Accordion allowZeroExpanded className="accordion">
              {data.titles.map((title, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{title}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <audio controls="controls" preload="none">
                      <source src={data.audioSrc[index]} />
                    </audio>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
