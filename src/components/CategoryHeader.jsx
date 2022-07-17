import React, { Component } from 'react'

export default class CategoryHeader extends Component {
  render() {
    const { category } = this.props
    return <h1 className='category-title'>{category.name.toUpperCase()}</h1>
  }
}
