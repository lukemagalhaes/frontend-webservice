import "./card.css";

interface CardProps {
    descricao: string,
    marca: string,
    preco: number
}

export function Card({ preco, marca, descricao } : CardProps){
    return(
        <div className="card">
            <img src={marca}/>
            <h2>{descricao}</h2>
            <p><b>Valor:</b>{preco}</p>
        </div>
    )
}