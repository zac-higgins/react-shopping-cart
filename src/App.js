import React from 'react';
import { Route } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartProvider } from './contexts/CartContext';

function App() {



	return (
		<CartProvider>
			<ProductProvider>
				<div className="App">
					<Navigation />
					<Route exact path="/" component={Products} />
					<Route path="/cart" component={ShoppingCart} />
				</div>
			</ProductProvider>
		</CartProvider>
	);
}

export default App;
