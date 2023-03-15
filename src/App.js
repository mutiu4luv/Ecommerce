
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/cart/Cart';
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

  // const fetchCart = async () => {
    
  //   setCart(await commerce.cart.retrieve())
    
  // }
  
const fetchCart = () => {
  commerce.cart.retrieve().then((cart) => {
    setCart(cart);
  }).catch((error) => {
    console.log('There was an error fetching the cart', error);
  });


}

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId,quantity)
    // setCart(item.cart)
    console.log(cart)
  }
  useEffect (() => {
      fetchProducts()
       fetchCart()
  }, [])

  return (
    <div className="App">
      <NavBar totalItems={cart.total_items}/>
            {/* <Products products={products} onAddToCart={handleAddToCart } /> */}
            <Cart cart={cart}/>

    </div>
  );
}

export default App;
