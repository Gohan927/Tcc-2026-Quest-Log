"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMissions } from "@/lib/quests";
import QuestCard from "@/Componentes/QuestCards/QuestCard";

export default function PaginaMissoes() {
    const router = useRouter();
    const [missoes, setMissoes] = useState([]);

    useEffect(() => {
        setMissoes(getMissions());
    }, []);

    return (
        <div className="relative min-h-screen bg-white px-16 py-10">
            {/* Botão Nova Missão */}
            <button
                onClick={() => router.push("/missoes/nova")}
                className="bg-[#29be44] text-white font-['Holtwood_One_SC'] text-xl px-8 py-4 hover:brightness-95 transition"
            >
                Nova Missão
            </button>

            {/* Avatar */}
            <div className="absolute top-6 right-8 size-16 rounded-full overflow-hidden">
                <img src="/avatar.png" alt="Avatar" className="size-full object-cover" />
            </div>

            {/* Título */}
            <h1 className="font-['Holtwood_One_SC'] text-black text-6xl text-center mt-10">
                Missões
            </h1>

            {/* Subtítulo */}
            <h2 className="font-['Holtwood_One_SC'] text-black text-3xl mt-16">
                Suas Missões
            </h2>

            {/* Grade de cards */}
            <div className="flex flex-wrap gap-10 mt-8">
                {missoes.length === 0 ? (
                    <p className="font-['Holtwood_One_SC'] text-gray-400">
                        Nenhuma missão ainda.
                    </p>
                ) : (
                    missoes.map((missao) => (
                        <QuestCard
                            key={missao.id}
                            missao={missao}
                            onClick={() => router.push(`/missoes/${missao.id}`)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}