import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'

export default class ProductsList extends Component {
  render() {
    const { products } = this.props
    return (
      <div className='products-container'>
        {products.map((product) => {
          return <ProductCard product={product} />
        })}
      </div>
    )
  }
}
