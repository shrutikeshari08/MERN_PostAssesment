import {useEffect,useState} from "react";

import {

getCart,
updateCart,
deleteCartItem,
clearCart

} from "../api/api";

function Cart(){

const[cart,setCart]=useState([]);

useEffect(()=>{

loadCart();

},[]);

const loadCart=async()=>{

const res=await getCart();

setCart(res.data);

}

const update=async(id,quantity)=>{

await updateCart(id,quantity);

loadCart();

}

const remove=async(id)=>{

await deleteCartItem(id);

loadCart();

}

const clear=async()=>{

await clearCart();

loadCart();

}

return(

<div>

<h2>Shopping Cart</h2>

<button onClick={clear}>

Delete Cart

</button>

{cart.map(item=>(

<div key={item.id}>

<h3>{item.product.name}</h3>

<p>

Price : {item.product.price}

</p>

<input

type="number"

value={item.quantity}

onChange={(e)=>

update(item.id,e.target.value)

}

/>

<button

onClick={()=>remove(item.id)}

>

Delete Item

</button>

</div>

))}

</div>

)

}

export default Cart;