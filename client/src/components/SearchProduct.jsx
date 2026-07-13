import {useState} from "react";
import {searchProducts} from "../api/api";

function SearchProduct(){

    const[keyword,setKeyword]=useState("");

    const[products,setProducts]=useState([]);

    const search=async()=>{

        const res=await searchProducts(keyword);

        setProducts(res.data);

    }

    return(

        <div>

            <h2>Search Product</h2>

            <input

                value={keyword}

                onChange={(e)=>setKeyword(e.target.value)}

            />

            <button onClick={search}>

                Search

            </button>

            {products.map(product=>(

                <div key={product.id}>

                    <h3>{product.name}</h3>

                    <p>{product.price}</p>

                </div>

            ))}

        </div>

    )

}

export default SearchProduct;