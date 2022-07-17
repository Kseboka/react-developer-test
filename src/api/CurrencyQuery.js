import { gql } from '@apollo/client'

const GET_CURRENCY = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`

export { GET_CURRENCY }
