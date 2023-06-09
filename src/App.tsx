import React, { useState } from 'react';
import './App.css';
import { CardProduto } from './components/card/cardProduto';
import { useProdutoData } from './hooks/produto/useProdutoData';
import { CreateModal } from './components/create-modal/create-modal';
import { useTimeData } from './hooks/time/useTimeData';
import { CardTime } from './components/card/cardTime';
import { useUsuarioDataValidation } from './hooks/usuario/useUsuarioDataValidation';

function App() {
  const { dataProduto } = useProdutoData();
  const { dataTime } = useTimeData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { dataUsuario, isLoading, isError } = useUsuarioDataValidation(username, password);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      setUsername('');
      setPassword('');
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <>
          <header className='header'>
            <h2>Bem-vindo!</h2>
            <button className='sair' onClick={handleLogout}>Sair</button>
          </header>
          <h1>Loja de Produtos</h1>
          <div className="card-times">
            {dataTime?.map(timeData => (
              <CardTime
                key={timeData.id}
                nome={timeData.nome}
                ano={timeData.ano}
                cidade={timeData.cidade}
                estado={timeData.estado}
              />
            ))}
          </div>
          <div className="card-grid">
            {dataProduto?.map(produtoData => (
              <CardProduto
                key={produtoData.id}
                descricao={produtoData.descricao}
                marca={produtoData.marca}
                preco={produtoData.preco}
              />
            ))}
          </div>
          {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
          <button className='button' onClick={handleOpenModal}>+</button>
        </>
      ) : (
        <>
            <section className="section-inputs">
            <h1>Fazer Login</h1>
              <input
                type="text"
                placeholder="Nome de usuário"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button className='login' onClick={handleLogin}>Login</button>
            </section>
        </>
      )}
    </div>
  );
}

export default App;
