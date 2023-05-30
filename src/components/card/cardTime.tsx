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
            <h2>{nome} ({ano})</h2>
            <p>{cidade} - {estado}</p>
        </div>
    )
}