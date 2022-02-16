import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Slider from '../Components/Slider'
import Anchor from '../Components/Anchor'
import Functionalities from '../Components/Functionalities'

function App() {
  return (
    <div className="App">
      <Slider />
      <section className="description" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h1>Projet Photoflop</h1>
        <p className="description-p">Photoflop est un logiciel d'édition d'image visant à être le plus simple
          et pratique possible pour l'utilisateur. Afin de réaliser au mieux ce projet, nous avons d'abord réalisé la 
          répartition des tâches. Cette étape du projet n'a pas été facilement réalisée puisque plusieurs personnes 
          du groupe voulaient travailler sur la même tâche. Les tâches que nous avons ciblé à l'origine du projet étaient :
        </p>
        <ul>
          <li>Séléction</li>
          <li>Interface graphique</li>
          <li>Filtres</li>
          <li>Dessins</li>
        </ul>
        <p className="description-p">
          Nous avons d'abord priorisé l'interface graphique car cela représente la base de l'application proposée. 
          Le problème majeur rencontré fut la mise en commun du code de chaque membre du groupe et d'utliser le code de
          chacun comme il le faut. Afin de résoudre ce problème, nous avons tous su modifier notre code afin de le rendre plus
          maniable vis-à-vis de l'interface graphique.
        </p>
      </section>
      <h1 className='fonctions'>Fonctionnalités</h1>
      <hr className='trait' />
      <Functionalities />
      <Anchor />
    </div>
  );
}

export default App;
