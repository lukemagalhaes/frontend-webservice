import { useEffect, useState } from 'react';
import { useProdutoDataCreate } from '../../hooks/produto/useProdutoDataCreate';
import { ProdutoData } from '../../interface/ProdutoData';

import "./modal.css";
import { useProdutoDataId } from '../../hooks/produto/useProdutoDataId';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState(0);
    const [marca, setMarca] = useState("");
    const { mutate, isSuccess, isLoading } = useProdutoDataCreate();
    
    const submit = () => {
        const produtoData: ProdutoData = {
            descricao, 
            preco,
            marca
        }
        mutate(produtoData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    const handleSair = () => {
        closeModal();
    }

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo produto</h2>
                <form className="input-container">
                    <Input label="Descrição" value={descricao} updateValue={setDescricao}/>
                    <Input label="Preço" value={preco} updateValue={setPreco}/>
                    <Input label="Marca" value={marca} updateValue={setMarca}/>
                    <div className="button-container">
                    <button onClick={submit} className="btn-secondary">
                        {isLoading ? 'Postando...' : 'Postar'}
                    </button>
                    <button onClick={handleSair} className="btn-secondary">
                        Sair
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}
