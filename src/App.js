import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {

	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart(item);
	};

	return (
		<ProductProvider>
			<div className="App">
				<Navigation cart={cart} />

				{/* Routes */}
				<Route
					exact
					path="/"
					render={() => (
						<Products
							addItem={addItem}
						/>
					)}
				/>

				<Route
					path="/cart"
					render={() => <ShoppingCart cart={cart} />}
				/>
			</div>
		</ProductProvider>
	);
}

export default App;
