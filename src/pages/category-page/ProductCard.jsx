import React, { Component } from 'react'

export default class ProductCard extends Component {
  render() {
    const { product } = this.props
    return (
      <div className='product-card'>
        <div className='product-card_image'>
          <img src={product.gallery[0]} alt='' />
        </div>
        <div>
          <p>
            <span>{product.brand} </span>
            <span>{product.name}</span>
          </p>
          <p>
            <span>{product.prices[0].currency.symbol} </span>
            <span>{product.prices[0].amount}</span>
          </p>
        </div>
      </div>
    )
  }
}
