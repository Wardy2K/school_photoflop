import React, { useState, useEffect } from "react";
import "./Anchor.css";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

const Anchor = () => {
  const [isFar, setIsFar] = useState(0);
  window.addEventListener("scroll", () => setIsFar(window.scrollY));

  useEffect(() => {
    AOS.init({
      duration: 850,
    });
  }, []);

  return (
    <div>
      {isFar > 10 ? (
        <a href="#header" className="opacity">
          <div
            className="cercle_rouge"
            data-aos="fade-up"
          >
            <FontAwesomeIcon icon={faAngleDoubleUp} className="arrow" />
          </div>
        </a>
      ) : null}
    </div>
  );
};

export default Anchor;