"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getMissionById, updateMission } from "@/lib/quests";
import ProgressGrid from "@/Componentes/App/ProgressGrid/ProgressGrid";

export default function PaginaMissao() {
    const { id } = useParams();
    const router = useRouter();
    const [missao, setMissao] = useState(null);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        setMissao(getMissionById(id) || null);
        setCarregado(true);
    }, [id]);

    function toggleDia(dia) {
        const diasConcluidos = missao.diasConcluidos.includes(dia)
            ? missao.diasConcluidos.filter((d) => d !== dia)
            : [...missao.diasConcluidos, dia];

        updateMission(id, { diasConcluidos });
        setMissao({ ...missao, diasConcluidos });
    }

    if (!carregado) return <p className="px-16 py-10">Carregando...</p>;

    if (!missao) {
        return (
            <div className="px-16 py-10">
                <p className="mb-6">Missão não encontrada.</p>
                <button
                    onClick={() => router.push("/")}
                    className="bg-[#29be44] text-white font-['Holtwood_One_SC'] px-6 py-3"
                >
                    Voltar
                </button>
            </div>
        );
    }

    return (
        <div className="px-16 py-10">
            <h1 className="font-['Holtwood_One_SC'] text-5xl mb-10">{missao.titulo}</h1>

            <p className="mb-4">
                <span className="font-['Holtwood_One_SC'] text-xl">Meta: </span>
                {missao.meta}
            </p>

            <p className="mb-10">
                <span className="font-['Holtwood_One_SC'] text-xl">Dias necessários: </span>
                {missao.diasNecessarios} ({missao.diasConcluidos.length} concluídos)
            </p>

            <ProgressGrid
                diasNecessarios={missao.diasNecessarios}
                diasConcluidos={missao.diasConcluidos}
                onToggleDia={toggleDia}
            />
        </div>
    );
}