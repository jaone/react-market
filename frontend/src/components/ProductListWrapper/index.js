import React from 'react'
import PropTypes from 'prop-types';

import Tag from './Tag'
import Pagination from './Pagination'
import ProductList from './ProductList'

const ProductListWrapper = props => {
  return (
    <div>
      <Tag />
      <Pagination />
      <ProductList />
    </div>
  )
}

ProductListWrapper.propTypes = {};

export default ProductListWrapper
