import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


const Item = props => {
	const [cart, setCart] = useContext(CartContext);
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />
			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button id={props.id} onClick={e => {
					const list = [...cart]
					setCart(list.filter(item => {
						return item.id !== Number(e.target.id)
					}))
				}}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
