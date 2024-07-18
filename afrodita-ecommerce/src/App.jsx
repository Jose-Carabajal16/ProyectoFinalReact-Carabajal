import './App.css';
import Navbar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from './context/cartContext';
import Carrito from './components/carrito/carrito';
import Checkout from './components/checkout/checkout';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/carrito" element={<Carrito />}/>
                    <Route path="/checkout" element={<Checkout />}/>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
