import React from 'react'

class ContractualisationNav extends React.Component {
  render() {
    return (
      <nav className='side-pane'>
        <ul className='side-pane__menu'>
          <li className='side-pane__title'>
            <h3>Lorem Ipsum</h3>
          </li>
          <li><a className='side-pane__link' href='#legal'>Fondement légal</a></li>
          <li><a className='side-pane__link' href='#donnees'>Choix des données</a></li>
          <li><a className='side-pane__link' href='#volumetrie'>Volumétrie</a></li>
          <li><a className='side-pane__link' href='#securite'>Engagement de sécurité</a></li>
          <li><a className='side-pane__link' href='#homologation'>Homologation</a></li>
          <li><a className='side-pane__link' href='#contrat'>Documents contractuels</a></li>
          <li><a className='side-pane__link' href='#cnil'>Obligation CNIL</a></li>
          <li><a className='side-pane__link' href='#recette'>Recette fonctionnelle</a></li>
          <li><a className='side-pane__link' href='#production'>Entrants techniques de production</a></li>
        </ul>
      </nav>
    )
  }
}

export default ContractualisationNav
