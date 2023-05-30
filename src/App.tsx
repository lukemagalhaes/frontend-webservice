import { useState } from 'react'
import './App.css'
import { CardProduto } from './components/card/cardProduto';
import { useProdutoData } from './hooks/produto/useProdutoData';
import { CreateModal } from './components/create-modal/create-modal';
import { useTimeData } from './hooks/time/useTimeData';
import { CardTime } from './components/card/cardTime';

function App() {
  const { dataProduto } = useProdutoData();
  const { dataTime } = useTimeData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Soccer Star</h1>
      <div className="card-times">
        {dataTime?.map(timeData =>
          <CardTime
            nome={timeData.nome}
            ano={timeData.ano}
            cidade={timeData.cidade}
            estado={timeData.estado}
          />
        )}
      </div>
      <div className="card-grid">
        {dataProduto?.map(produtoData =>
          <CardProduto
            descricao={produtoData.descricao}
            marca={produtoData.marca}
            preco={produtoData.preco}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
