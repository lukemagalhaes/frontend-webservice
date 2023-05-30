import { useEffect, useState } from 'react';

import "./modal.css";
import { useContaBancariaDataCreate } from '../../hooks/contaBancaria/useContaBancariaDataCreate';
import { ContaBancariaData } from '../../interface/ContaBancariaData';

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

export function CreateModalConta({ closeModal }: ModalProps){
    const [nomeTitular, setNomeTitular] = useState("");
    const [saldo, setSaldo] = useState(0);
    const [numAgencia, setNumAgencia] = useState("");
    const { mutate, isSuccess, isLoading } = useContaBancariaDataCreate();
    
    const submit = () => {
        const contaBancariaData: ContaBancariaData = {
            nomeTitular, 
            saldo,
            numAgencia
        }
        mutate(contaBancariaData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre sua conta bancária</h2>
                <form className="input-container">
                    <Input label="nomeTitular" value={nomeTitular} updateValue={setNomeTitular}/>
                    <Input label="saldo" value={saldo} updateValue={setSaldo}/>
                    <Input label="numAgencia" value={numAgencia} updateValue={setNumAgencia}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}