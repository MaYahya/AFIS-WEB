import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Software from './pages/Software';
import About from './pages/About';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';

import { CartProvider } from './context/CartContext';
import { SiteProvider } from './context/SiteContext';

function App() {
  return (
    <SiteProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="software" element={<Software />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="request-quote" element={<RequestQuote />} />
          </Route>
        </Routes>
      </CartProvider>
    </SiteProvider>
  );
}

export default App;
