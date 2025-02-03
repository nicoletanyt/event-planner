import './App.css'
import Cart from './components/Cart';
import LandingPage from "./components/LandingPage";
import ProductList from './components/ProductList'
import Nav from "./components/Nav";

function App() {

  return (
		<div>
			<LandingPage />
			<Nav />
			<Cart />
			<ProductList />
		</div>
	);
}

export default App
