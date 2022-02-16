import React, { useState, Fragment } from 'react'
import './Functionalities.css'
import Checkbox from "@material-ui/core/Checkbox";


export default function Functionalities() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isGrayscaled, setIsGrayscaled] = useState(false);

  const handleBlurr = (e) => {
    setIsBlurred(!isBlurred);
  }

  const handleGrayscale = (e) => {
    setIsGrayscaled(!isGrayscaled);
  }
  return (
    <Fragment>
        <section className="section" id='grey' data-aos="fade-right">
            <p><pre>Avec notre produit, vous pourrez floutter n'importe quelle image en un seul clic.</pre></p>
            <Checkbox
                onChange={handleBlurr}
            />
            <img src="/Images/lion.jpeg" className={isBlurred ? "blurred br" : "br"} alt="lion" />
        </section>
        <hr className='trait' />
        <section className='section' data-aos="fade-left">
            <p>Vous pourrez aussi mettre en noir et blanc n'importe quelle image en un seul clic.</p>
            <Checkbox
                onChange={handleGrayscale}
            />
            <img src="/Images/lion.jpeg" style={{marginLeft: "24px"}} className={isGrayscaled ? "grayscaled br" : "br"} alt="lion" />
        </section>
    </Fragment>
  )
}
