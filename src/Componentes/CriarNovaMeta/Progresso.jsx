function Progresso({ diasNecessarios }) {
    const dias = Array.from({ length: diasNecessarios }, (_, i) => i);

    return (
        <div className="progress-grid">
            {dias.map((dia) => (
                <div key={dia} className="progress-box" onClick={() => marcarDia(dia)}>
                    {/* marca um "V" ou check quando o dia for concluído */}
                </div>
            ))}
        </div>
    );
}