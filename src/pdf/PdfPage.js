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
      "https://www.flipbookpdf.net/web/site/4baae3eb6090490740efe97290b43b0aace2ccb2202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/cf3358fa7463b66c47e280ee0faab25a1a044e13202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/08b1dfc785a9f5b1d53302022dc2bce07c798554202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/ddb62cc896376b7c5e3b5edf8607aa0566247a38202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/b984576fc0e6cb545b6dcd009b930a23ca2496b8202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/ac3c659130f81e5b86ab3a6d6d2caa727a368c4c202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/309d42763d2ed016f80f7c0e06854db78c71fb9f202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/8031c9599f5565b41f272d8735c363b56fe57358202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/b0f872c80878ec6d50a5828ce022ab69ec5f9cd5202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/cd94c5c539b7d539ad24ec143e0d05446bf79a6c202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/a73c841903f6ffcf9727a83085dc99137636ac84202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/c14c7a3921cbf53aad44ded8c530b7eb50754d46202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/8d2a512701cb3f2a306b8df06e40fcf668937d36202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/4715eca24ecc6ed3a786ccab3f07ee2472704239202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/1177feb4e57c21b5712adb97d5ad789b0c2e18f6202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/f91b140ca15294ec6e7d2683092ba2363e6b7ade202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/b71e4ed02382ee14fab1844a2e6c3396cf263a9f202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/8c87658f57b52785c070eedb5b0f8e16ebb75cc4202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/8a4e59ce90689b45e3b40f9ea85994c8025b9e1e202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/5ea6eb89e21e04297731ef9ab2c49abd6e1f5ba4202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/abb90a03c1e30e1fd00d42c411bc835a319e85c1202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/e0924665c46fffbd277d51db5f9b7e557dfd30ac202206.pdf.html",
      "https://www.flipbookpdf.net/web/site/4edea44688d25466fc6a5369a55228b3b7fba847202206.pdf.html"
    ],
    imgSrc: [
      "https://www.flipbookpdf.net/web/files/flipbooks/8b4f2da18fe88ac3d53f1e98171c65783c012c88202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/a85b9b1d5a1840d2a051c4ba810facb12517aebe202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/aa5366544b46ffc69b8cac78ff8663f6e486022e202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/ed62e1cca34c6581f98198fcb3daf2ca2dfb4e4a202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/514221d153d74278c9c9fb7d83ce4c765fc2e32c202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/a4fc079c0f326e9d4e2d0f682668899fb306a0e9202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/2b8a07c173360a5830728fb3ba2eb25c8112026c202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/4baae3eb6090490740efe97290b43b0aace2ccb2202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/cf3358fa7463b66c47e280ee0faab25a1a044e13202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/08b1dfc785a9f5b1d53302022dc2bce07c798554202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/ddb62cc896376b7c5e3b5edf8607aa0566247a38202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/b984576fc0e6cb545b6dcd009b930a23ca2496b8202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/ac3c659130f81e5b86ab3a6d6d2caa727a368c4c202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/309d42763d2ed016f80f7c0e06854db78c71fb9f202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/8031c9599f5565b41f272d8735c363b56fe57358202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/b0f872c80878ec6d50a5828ce022ab69ec5f9cd5202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/cd94c5c539b7d539ad24ec143e0d05446bf79a6c202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/a73c841903f6ffcf9727a83085dc99137636ac84202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/c14c7a3921cbf53aad44ded8c530b7eb50754d46202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/8d2a512701cb3f2a306b8df06e40fcf668937d36202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/4715eca24ecc6ed3a786ccab3f07ee2472704239202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/1177feb4e57c21b5712adb97d5ad789b0c2e18f6202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/f91b140ca15294ec6e7d2683092ba2363e6b7ade202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/b71e4ed02382ee14fab1844a2e6c3396cf263a9f202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/8c87658f57b52785c070eedb5b0f8e16ebb75cc4202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/8a4e59ce90689b45e3b40f9ea85994c8025b9e1e202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/5ea6eb89e21e04297731ef9ab2c49abd6e1f5ba4202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/abb90a03c1e30e1fd00d42c411bc835a319e85c1202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/e0924665c46fffbd277d51db5f9b7e557dfd30ac202206.pdf/1.jpg",
      "https://www.flipbookpdf.net/web/files/flipbooks/4edea44688d25466fc6a5369a55228b3b7fba847202206.pdf/1.jpg"
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
