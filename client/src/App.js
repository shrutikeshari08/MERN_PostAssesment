import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import SearchProduct from "./components/SearchProduct";
import Cart from "./components/Cart";

function App() {

  return (

    <div>

      <h1>Shopping Cart</h1>

      <SearchProduct/>

      <hr/>

      <ProductDetails/>

      <hr/>

      <ProductList/>

      <hr/>

      <Cart/>

    </div>

  );

}

export default App;