import "./cardProduto.css";

interface CardProps {
    descricao: string,
    marca: string,
    preco: number
}

export function CardProduto({ preco, marca, descricao }: CardProps) {
    return (
        <div className="card">
            <img src={"https://source.unsplash.com/random/250x250/?" + marca} />
            <h2>{descricao}</h2>
            <h6>{marca}</h6>
            <p><b>R$:</b>{preco}</p>
        </div>
    )
}