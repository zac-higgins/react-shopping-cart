import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';


// Components
import Product from './Product';
import { CartContext } from '../contexts/CartContext';

const Products = props => {
	const [products] = useContext(ProductContext);
	console.log("Here are the products:", products);
	const [cart, setCart] = useContext(CartContext);
	const addItem = item => {
		setCart([...cart, item]);
	}
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
