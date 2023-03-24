
import { Switch } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import Checkout from './components/checkoutForm/checkout/Checkout';
import NavBar from './components/products/Navabar/NavBar';
import Products from './components/products/Products';
import { commerce } from './lib/Commerce';

function App() {
  const [products, setProducts] = useState ([])
  const [cart, setCart] = useState({})
// console.log("cart", cart)
  const fetchProducts = async () => {
    const {data} = await commerce.products.list()
    setProducts(data)
  }
// if (cart && cart.line_items) {
// console.log(cart.line_items)
// }

  // const fetchCart = async () => {
    
  //   setCart(await commerce.cart.retrieve())
    
  // }

  
const fetchCart = () => {
  commerce.cart.retrieve().then((cart) => {
    setCart(cart);
  }).catch((error) => {
    // console.log('There was an error fetching the cart', error);
  });


}

  const handleAddToCart = async (productId, quantity) => {
    const {cart} = await commerce.cart.add(productId,quantity)
    // setCart(cart)
    fetchCart()
    // console.log(cart)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
console.log(productId, quantity)
    const {cart} = await commerce.cart.update(productId, {quantity})
    // setCart(cart)
             fetchCart()

    console.log(cart)

  }
  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId)
    // setCart(cart)
       fetchCart()
  }
  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty()
  //   setCart(cart)
       fetchCart()
}
  useEffect (() => {
      fetchProducts()
       fetchCart()
  }, [])

  return (
    <div className="App">
       <NavBar totalItems={cart?.total_items}/>
       
    <Routes>
    
     
     <Route path='/' element= { <Products products={products} onAddToCart={handleAddToCart } />} />
     <Route path='/cart' element= { <Cart
      cart={cart}
      handleUpdateCartQty ={handleUpdateCartQty }
       handleRemoveFromCart ={handleRemoveFromCart }
       handleEmptyCart ={handleEmptyCart }
     onAddToCart={handleAddToCart } 
    //  refetch={fetchCart} 
      /> } />
       <Route path='/checkout' element= { <Checkout cart={cart} />} />

    </Routes> 
      </div>
  );
}

export default App;
