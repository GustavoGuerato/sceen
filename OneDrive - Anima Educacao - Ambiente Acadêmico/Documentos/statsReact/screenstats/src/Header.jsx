import React from "react";
import "./carousel.scss";

function NetflixGallery() {
  return (
    <div className="wrapper">
      <section id="section1">
        <a href="#section3" className="arrow__btn">
          ‹
        </a>
        <div className="item">
          <img
            src="https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp"
            alt="Netflix Image 1"
          />
        </div>
        <div className="item">
          <img
            src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg"
            alt="Netflix Image 2"
          />
        </div>
        {/* Adicione as outras imagens aqui */}
        <a href="#section2" className="arrow__btn">
          ›
        </a>
      </section>
      <section id="section2">
        <a href="#section1" className="arrow__btn">
          ‹
        </a>
        <div className="item">
          <img
            src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVopDZ5Fy9_fk_HO5WxHTXKKjKhtWFupbSjuvPwfLK_vytzon4EwRUdGgYJ34JwPxOTK_NkV3aXfkULMB0Dcct-FyfqzH-X44VXuRMp4QeBHlvKwWeZFpZlGdItPzmmg4scmwhG7SQ.jpg"
            alt="Netflix Image 3"
          />
        </div>
        <div className="item">
          <img
            src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABTOj1-116yVcgKWMU2dI3GFR4x0fSkiGsqtLLeLUxRR7STaksjAqBTrYlTfrB8nIGnGvXksi0ewXAhVGg6-pLxpFOIfcpjK-pf8D5xehFZo5a6vJbo4L0AGbrzglbyUoq255QBJgRQ.jpg"
            alt="Netflix Image 4"
          />
        </div>
        {/* Adicione as outras imagens aqui */}
        <a href="#section3" className="arrow__btn">
          ›
        </a>
      </section>
      <section id="section3">
        <a href="#section2" className="arrow__btn">
          ‹
        </a>
        <div className="item">
          <img
            src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRr4YxdaABuAuH_3FmSQZn7BCvLp-UUPsXE9MiYpvFP3CSUHV2zOew5oVqKqqdaOd3tbFVS0Uf67uIs7_eZydlCghg4nK0nMatRpPImABwTOhnNzCLCxdKrua7pPIcPCZqBYTeAO5g.jpg"
            alt="Netflix Image 5"
          />
        </div>
        {/* Adicione as outras imagens aqui */}
        <a href="#section1" className="arrow__btn">
          ›
        </a>
      </section>
    </div>
  );
}

export default NetflixGallery;
