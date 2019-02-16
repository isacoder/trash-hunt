import React, { Component } from 'react';
// components
import Catalog from '../components/catalog';
// styles
import '../assets/styles/catalog-page.css'
// images
import BackImg from '../assets/images/background.png';

class CatalogPage extends Component {
  render() {
    return(
      <div>
        <div className='catchPhraseContainer' style={{
          background: `url(${BackImg}) no-repeat center`,
          backgroundSize: 'cover'
        }}>
          <div className='catchPhrase'>
            Find your
            <br />
            treasure
            <div className>

            </div>
          </div>
        </div>
        <Catalog
          tag='gallery-item'
        />
      </div>
    )
  }
}

export default CatalogPage;
