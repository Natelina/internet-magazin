import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Cart, Home } from './pages';

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/db.json').then((res) => res.json()).then((json) => setPizzas(json.pizzas));
  }, []);
  console.log('pizzas', pizzas);
  return (
    <div className="wrapper">

      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={pizzas} />} exact />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
