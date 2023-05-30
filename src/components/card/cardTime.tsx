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
            <img src={"https://img.freepik.com/fotos-gratis/respingo-colorido-abstrato-3d-background-generativo-ai-background_60438-2509.jpg?w=1380&t=st=1685422895~exp=1685423495~hmac=12228be2b33e59a8b0f5ccabdd21156d71abf5e44a670d987d658ce3c2516ef5"} />
            <h2>{nome}</h2>
            <h2>{ano}</h2>
            <h2>{cidade}</h2>
            <p>{estado}</p>
        </div>
    )
}