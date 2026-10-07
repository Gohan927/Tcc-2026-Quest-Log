"use client";

import { useState } from "react";
import Progresso from "../app/CriarNovaMeta/Progresso";

export default function NovaMissao() {
    const [meta, setMeta] = useState("");
    const [dias, setDias] = useState(0);

    const diasArray = Array.from({ length: Number(dias) || 0 }, (_, i) => i);

    return (
        <div className="pagina-metas">
            <h1>{meta || "Sem título"}</h1>

            <label>
                Meta:
                <input value={meta} onChange={(e) => setMeta(e.target.value)} />
            </label>

            <label>
                Dias necessários:
                <input
                    type="number"
                    min={0}
                    value={dias}
                    onChange={(e) => setDias(e.target.value)}
                />
            </label>

            <div className="progress-grid">
                {diasArray.map((dia) => (
                    <div key={dia} className="progress-box" />
                ))}
            </div>
        </div>
    );
}