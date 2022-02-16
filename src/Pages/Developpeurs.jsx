import React, { Fragment } from 'react'

export default function Developpeurs() {
  return (
    <Fragment>
      <div className="flex3">
        <div className='carte' data-aos="fade-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="50"
          data-aos-offset="0">
          <img src="/Images/noemie.png" width={"60px"} alt="logo" />
          <h2>Noémie Aubert</h2>
          <p>Passionné de ...</p>
        </div>

        <div className='carte' data-aos="fade-down"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0">
          <img src="/Images/edgar.png" width={"60px"} alt="logo" />
          <h2>Edgar Paya</h2>
          <p>Passionné de ...</p>
        </div>

        <div className='carte' data-aos="fade-up"
          data-aos-easing="ease-in-back"
          data-aos-delay="600"
          data-aos-offset="0">
          <img src="/Images/matthieu.png" width={"60px"} alt="logo" />
          <h2>Matthieu Brossard</h2>
          <p>Passionné de ...</p>
        </div>

        <div className='carte' data-aos="fade-down"
          data-aos-easing="ease-in-back"
          data-aos-delay="900"
          data-aos-offset="0">
          <img src="/Images/avataaars.png" width={"60px"} alt="logo" />
          <h2>Sirine Fendy</h2>
          <p>Passionné de ...</p>
        </div>
      </div>
      <h1 className='title'>Technologies utilisées</h1>
      <hr className='trait'/>
      <h4 className='tac'>SDL2</h4>
      <h4 className='tac'>GTK</h4>
      <h4 className='tac'>ReactJS</h4>
      <h4 className='tac'>Make</h4>
      <h4 className='tac'>Unsplash</h4>
      <div className='description'>
        <p>Plusieurs fonctionnalités sont actuellement en cours de développement.</p>
        <p>Nous espérons que ces fonctionnalités voient le jour très prochainement.</p>
        <p>On peut notamment citer :</p>
        <ul>
          <li>Mise en place de bordures</li>
          <li>Nouveaux filtres</li>
          <li>Possibilité de retour arrière</li>
        </ul>
      </div>
    </Fragment>
  )
}
