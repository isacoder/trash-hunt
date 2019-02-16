import React, { Component } from 'react';
// components
import Catalog from '../components/catalog';

class CatalogPage extends Component {
  render() {
    return(
      <div>
        <Catalog
          tag='gallery-item'
        />
      </div>
    )
  }
}

export default CatalogPage;
