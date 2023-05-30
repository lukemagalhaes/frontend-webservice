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

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={descricao} updateValue={setDescricao}/>
                    <Input label="price" value={preco} updateValue={setPreco}/>
                    <Input label="image" value={marca} updateValue={setMarca}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}