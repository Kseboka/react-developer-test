import { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'
import CategoryPage from './pages/category-page/CategoryPage'
import ProductPage from './pages/ProductPage'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Route path='/' component={CategoryPage} />
          <Route path='/product/:product_id' component={ProductPage} />
          <Route exact path='/cart' component={CartPage} />
        </div>
      </BrowserRouter>
    )
  }
}
export default App
