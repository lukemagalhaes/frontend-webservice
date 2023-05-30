import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { ProdutoData } from './interface/ProdutoData';
import { useProdutoData } from './hooks/produto/useProdutoData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useProdutoData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(produtoData => 
          <Card
            descricao={produtoData.descricao} 
            marca={produtoData.marca}
            preco={produtoData.preco} 
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
