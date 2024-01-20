import './App.css'
import { CartProvider } from "./context/CartContext.jsx";
import Routing from './components/Routing';

function App() {

  return (
    <CartProvider>
      <Routing />
    </CartProvider>
  )
}

export default App;