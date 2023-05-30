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
    // Verificar se os campos de usuário e senha estão preenchidos
    if (username.trim() !== '' && password.trim() !== '') {
      // Realizar a validação dos dados do usuário
      // A resposta da API será armazenada em dataUsuario
      // isLoading e isError podem ser usados para exibir indicadores de carregamento ou mensagens de erro
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
          <header>
            <div>Bem-vindo, {dataUsuario?.login}!</div>
            <button onClick={handleLogout}>Logout</button>
          </header>
          <h1>Cardápio</h1>
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
          <button className='button' onClick={handleOpenModal}>novo</button>
        </>
      ) : (
        <>
          <header>
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
            <button className='button' onClick={handleLogin}>Login</button>
          </header>
          <h1>Por favor, faça login</h1>
        </>
      )}
    </div>
  );
}

export default App;
