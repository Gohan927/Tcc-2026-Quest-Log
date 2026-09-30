"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMissions } from "@/lib/quests";

export default function Sidebar() {
    const router = useRouter();
    const [aberto, setAberto] = useState(true);
    const [missoes, setMissoes] = useState([]);

    useEffect(() => {
        setMissoes(getMissions());
    }, []);

    return (
        <>
            {/* Botão de abrir/fechar */}
            <button
                onClick={() => setAberto(!aberto)}
                className="fixed top-4 left-4 z-50 text-[#e6d7b8] bg-[#1a1612] p-2 rounded hover:bg-[#2a241d] transition"
                aria-label="Abrir/fechar menu"
            >
                ☰
            </button>

            {/* Drawer */}
            <aside
                className={`fixed top-0 left-0 h-screen bg-[#1a1612] border-r border-[#3a3226] transition-all duration-300 overflow-hidden z-40
                ${aberto ? "w-64" : "w-0"}`}
            >
                <div className="flex flex-col h-full w-64 pt-16 px-4 pb-4">
                    <h2 className="font-['Holtwood_One_SC'] text-[#d4af37] text-lg mb-4">
                        Quest Log
                    </h2>

                    <button
                        onClick={() => router.push("/")}
                        className="text-left text-[#e6d7b8] py-2 px-3 rounded hover:bg-[#2a241d] transition mb-2"
                    >
                        🏠 Missões
                    </button>

                    <button
                        onClick={() => router.push("/missoes/nova")}
                        className="text-left text-[#29be44] py-2 px-3 rounded hover:bg-[#2a241d] transition mb-4"
                    >
                        + Nova Missão
                    </button>

                    <p className="text-[#8a7f6a] text-xs uppercase tracking-wide mb-2 px-3">
                        Suas missões
                    </p>

                    {/* Lista scrollável */}
                    <div className="flex-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#3a3226] scrollbar-track-transparent">
                        {missoes.length === 0 ? (
                            <p className="text-[#5a5244] text-sm px-3">Nenhuma missão ainda.</p>
                        ) : (
                            missoes.map((missao) => (
                                <button
                                    key={missao.id}
                                    onClick={() => router.push(`/missoes/${missao.id}`)}
                                    className="w-full text-left text-[#e6d7b8] text-sm py-2 px-3 rounded hover:bg-[#2a241d] transition truncate"
                                >
                                    📜 {missao.meta || "Sem título"}
                                </button>
                            ))
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
}