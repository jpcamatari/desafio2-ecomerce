import React, { useState, useEffect } from 'react';

import Cart from '../../assets/cart.png'

import { Container } from './style';

import api from '../../services/api';

interface IProduct {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}


const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);


  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  useEffect(() => {
    localStorage.setItem(`@cart`, JSON.stringify(cart));
  }, [cart]);


  const handleCart = (index: number) => {
    let product = data[index]
    setCart(cart => [...cart, product]);
  }

  return (
    <Container>
      <div className="nav">
        <div>
          <img src="https://www.ipec.ind.br/wp-content/uploads/2018/12/cropped-logo_ipec2-2.png" alt="vtex" width="200px" height="auto" />
        </div>
        <div className="cart">
          <img src={Cart} alt="shopcart" width="50px" height="auto" />
          <span>( {cart.length} ) - Itens</span>
        </div>
      </div>
      <section>
        {data.map((prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="iphone" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>{prod.price}</h6>
            <button onClick={() => handleCart(index)}> Adicionar ao carrinho</button>
          </div>
        ))}
      </section>
      <footer className="footer">
        <br />
        <p>Todos os direitos reservados.</p>
        <p>
          Desenvolvido por jpcamatari
        </p>
      </footer>
    </Container>


  );
}

export default Home;