import "./cardTime.css";

interface CardProps {
    nome: string,
    ano: number,
    cidade: string,
    estado: string
}

export function CardTime({ nome, ano, cidade, estado }: CardProps) {
    return (
        <div className="cardTime">
           <img src={`https://source.unsplash.com/random/250x250/?${nome}`} alt={nome} />
            <h2>{nome}</h2>
            <h2>{ano}</h2>
            <h2>{cidade}</h2>
            <p>{estado}</p>
        </div>
    )
}