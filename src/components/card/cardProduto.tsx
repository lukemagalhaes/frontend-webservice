import React, { useState } from 'react';
import './cardProduto.css';
import { CreateModalConta } from '../create-modal/create-modalConta';

interface CardProps {
  descricao: string;
  marca: string;
  preco: number;
}

export function CardProduto({ preco, marca, descricao }: CardProps) {
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
      <h6>{descricao} - {marca}</h6>
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
