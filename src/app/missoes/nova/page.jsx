"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveMission } from "@/lib/quests";

export default function NovaMissao() {
    const router = useRouter();
    const [titulo, setTitulo] = useState("");
    const [meta, setMeta] = useState("");
    const [dias, setDias] = useState("");

    const diasArray = Array.from({ length: Number(dias) || 0 }, (_, i) => i);

    function handleSalvar() {
        const novaMissao = {
            id: crypto.randomUUID(),
            titulo: titulo || "Sem título",
            meta,
            diasNecessarios: Number(dias) || 0,
            diasConcluidos: [],
            criadaEm: new Date().toISOString(),
        };
        saveMission(novaMissao);
        router.push(`/missoes/${novaMissao.id}`);
    }

    return (
        <div className="px-16 py-10">
            <input
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Sem título"
                className="font-['Holtwood_One_SC'] text-5xl bg-transparent border-none outline-none placeholder:text-gray-400 w-full mb-10"
            />

            <div className="flex items-center gap-3 mb-6">
                <label className="font-['Holtwood_One_SC'] text-xl">Meta:</label>
                <input
                    value={meta}
                    onChange={(e) => setMeta(e.target.value)}
                    className="border-b border-gray-400 bg-transparent outline-none px-2 py-1 flex-1"
                />
            </div>

            <div className="flex items-center gap-3 mb-10">
                <label className="font-['Holtwood_One_SC'] text-xl">Dias necessários:</label>
                <input
                    type="number"
                    min={0}
                    value={dias}
                    onChange={(e) => setDias(e.target.value)}
                    className="border-b border-gray-400 bg-transparent outline-none px-2 py-1 w-24"
                />
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
                {diasArray.map((dia) => (
                    <div key={dia} className="w-8 h-8 bg-[#d9d9d9] border border-gray-400" />
                ))}
            </div>

            <button
                onClick={handleSalvar}
                className="bg-[#29be44] text-white font-['Holtwood_One_SC'] text-lg px-8 py-3 hover:brightness-95 transition"
            >
                Salvar Missão
            </button>
        </div>
    );
}