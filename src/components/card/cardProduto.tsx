import React, { useState } from 'react';
import './cardProduto.css';
import { CreateModalConta } from '../create-modal/create-modalConta';

interface CardProps {
  descricao: string;
  marca: string;
  preco: number;
}

export function CardProduto({ preco, marca, descricao }: CardProps) {
<<<<<<< HEAD
  const [isModalContaOpen, setIsModalContaOpen] = useState(false);

  const handleOpenConta = () => {
    setIsModalContaOpen(true);
  };

  const handleCloseConta = () => {
    setIsModalContaOpen(false);
  };

  return (
    <div className="card">
      <img src={`https://source.unsplash.com/random/250x250/?${marca}`} alt={marca} />
      <h2>{descricao}</h2>
      <h6>{marca}</h6>
      <p>
        <b>R$:</b>
        {preco}
      </p>
      {isModalContaOpen && <CreateModalConta closeModal={handleCloseConta} />}
      <button className="comprar" onClick={handleOpenConta}>
        Comprar
      </button>
    </div>
  );
}
=======
    return (
        <div className="card">
            <img src={"https://source.unsplash.com/random/250x250/?" + marca} />
            <h2>{descricao}</h2>
            <h6>{marca}</h6>
            <p><b>R$:</b>{preco}</p>
        </div>
    )
}
>>>>>>> f7abec859ed08332c9afdf5cb800d11d6e610814
