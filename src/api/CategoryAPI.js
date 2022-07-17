import { gql } from '@apollo/client'

const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`
const GET_CATEGORY = gql`
  query GetCategory($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
        name
        brand
        gallery
        inStock
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`

export { GET_CATEGORIES, GET_CATEGORY }
