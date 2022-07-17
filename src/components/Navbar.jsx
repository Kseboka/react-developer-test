import React, { Component } from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
import currency from '../assets/currency.svg'
import { GET_CATEGORIES } from '../api/CategoryAPI'
import { Query } from '@apollo/client/react/components'
import { categorySwitch } from '../actions/categorySwitch'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  handleClick = (name) => {
    this.props.categorySwitch(name)
    console.log(name)
  }

  render() {
    return (
      <nav className='nav'>
        <ul className='nav-links'>
          <Query query={GET_CATEGORIES}>
            {({ data, loading }) => {
              if (loading) return
              const { categories } = data

              return categories.map((category, index) => {
                return (
                  <Link to={'/' + category.name}>
                    <li
                      onClick={() => {
                        this.handleClick(category.name)
                      }}
                      key={index}
                    >
                      {category.name.toUpperCase()}
                    </li>
                  </Link>
                )
              })
            }}
          </Query>
        </ul>
        <div className='nav-logo'>
          <img src={logo} alt='' />
        </div>
        <div className='nav-icons'>
          <img src={currency} alt='' />
          <img src={cart} alt='' />
        </div>
      </nav>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    categorySwitch: (name) => {
      dispatch(categorySwitch(name))
    },
  }
}

export default connect(null, mapDispatchToProps)(Navbar)
