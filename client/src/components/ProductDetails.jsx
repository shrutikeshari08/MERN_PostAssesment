import {useState} from "react";
import {getProductById} from "../api/api";

function ProductDetails(){

    const[id,setId]=useState("");

    const[product,setProduct]=useState(null);

    const search=async()=>{

        const res=await getProductById(id);

        setProduct(res.data);

    }

    return(

        <div>

            <h2>Product By ID</h2>

            <input

                placeholder="Enter ID"

                value={id}

                onChange={(e)=>setId(e.target.value)}

            />

            <button onClick={search}>
                Search
            </button>

            {product && (

                <div>

                    <h3>{product.name}</h3>

                    <p>{product.description}</p>

                    <p>{product.price}</p>

                </div>

            )}

        </div>

    )

}

export default ProductDetails;