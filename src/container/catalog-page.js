import React, { Component } from 'react';
// components
import Catalog from '../components/catalog';
import Filter from '../components/filter';
// styles
import '../assets/styles/catalog-page.css'
// images
import BackImg from '../assets/images/background.png';

class CatalogPage extends Component {
  state = {
    tag: 'gallery-item',
    pathName: '/my-item'
  }

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
          </div>
        </div>
        <div className='catalogTitle'>Go get items now</div>
        <Catalog
          tag={this.state.tag}
          pathName={this.state.pathName}
        />
        <Filter />
      </div>
    )
  }
}

export default CatalogPage;
