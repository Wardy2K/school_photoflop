import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Slider() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Carousel interval="3500">
      <Carousel.Item>
        <img
          className="d-block w-100 slider"
          src="\Images\first.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 data-aos="zoom-in" id="title_slider">
            Photoflop
          </h3>
          <p id="p_slider">Photoflop est un outil mis à la disposition de tous et toutes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider"
          src="\Images\team.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 id="title_slider">Une équipe dévouée</h3>
          <p id="p_slider">Toujours à l'écoute des utilisateurs</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider"
          src="\Images\image3.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 id="title_slider">Un logiciel qui se renouvelle</h3>
          <p id="p_slider">
            Ajouts réguliers de nouvelles fonctionnalitées
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}