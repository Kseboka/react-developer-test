import React, { Component } from 'react'
import { GET_CATEGORY } from '../../api/CategoryAPI'
import { Query } from '@apollo/client/react/components'
import { connect } from 'react-redux'
import { categorySwitch } from '../../actions/categorySwitch'
import ProductsList from './ProductsList'
import CategoryHeader from './CategoryHeader'

class CategoryPage extends Component {
  render() {
    const { category } = this.props
    return (
      <div className='category-page'>
        <Query query={GET_CATEGORY} variables={{ title: category }}>
          {({ data, loading, error }) => {
            if (loading) return
            if (error) return

            return (
              <>
                <CategoryHeader category={data.category} />
                <ProductsList products={data.category.products} />
              </>
            )
          }}
        </Query>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // const id = ownProps.match.params.product_id
  return {
    category: state.categorySwitch,
  }
}

export default connect(mapStateToProps, null)(CategoryPage)
