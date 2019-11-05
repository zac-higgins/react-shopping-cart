import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


const Item = props => {
	const [cart] = useContext(CartContext);
	console.log("the cart", cart);
	const indexConverter = (item) => {
		return item.id === props.id;
	}
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />
			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button value={cart.findIndex(indexConverter)} onClick={e => {
					console.log("splice", e.target.value)
					cart.splice(e.target.value, 1)
				}}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
