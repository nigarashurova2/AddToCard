import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import Shop from './Shop';
import { CartProvider } from 'react-use-cart';
import Footer from './Footer';

const App = () => {
    return (
        <div>
        <BrowserRouter>
            <Switch>
            <CartProvider>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Footer />
            </CartProvider>
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default App