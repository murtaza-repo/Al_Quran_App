import React from "react";

export const PdfPage = () => {

  const data = {
    linkSrc: [
      "https://www.flipbookpdf.net/web/site/8b4f2da18fe88ac3d53f1e98171c65783c012c88202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/a85b9b1d5a1840d2a051c4ba810facb12517aebe202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/aa5366544b46ffc69b8cac78ff8663f6e486022e202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/ed62e1cca34c6581f98198fcb3daf2ca2dfb4e4a202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/514221d153d74278c9c9fb7d83ce4c765fc2e32c202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/a4fc079c0f326e9d4e2d0f682668899fb306a0e9202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/2b8a07c173360a5830728fb3ba2eb25c8112026c202206.pdf.html",

    ],
    imgSrc: [
      "https://www.flipbookpdf.net/web/files/flipbooks/8b4f2da18fe88ac3d53f1e98171c65783c012c88202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/a85b9b1d5a1840d2a051c4ba810facb12517aebe202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/aa5366544b46ffc69b8cac78ff8663f6e486022e202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/ed62e1cca34c6581f98198fcb3daf2ca2dfb4e4a202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/514221d153d74278c9c9fb7d83ce4c765fc2e32c202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/a4fc079c0f326e9d4e2d0f682668899fb306a0e9202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/2b8a07c173360a5830728fb3ba2eb25c8112026c202206.pdf/1.jpg"
    ],
    title: Array(30).fill().map((_, i) => `Juz ${i+1}`)
  }

  return (
    <>
      <div className="container mt-3" style={{ marginBottom: "5rem" }}>
        <div className="row">
        {data.linkSrc.map((link, index) => (
          <div
            className="col-6 col-md-4 text-center"
            style={{ color: "crimson" }}
            key={index}
          >             
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={data.imgSrc[index]}
                  alt="Sipara1"
                  width="65%"
                />
              </a>
              <p>{data.title[index]}</p>
            
          </div>
        ))}
        </div>
      </div>
    </>
  );
};
