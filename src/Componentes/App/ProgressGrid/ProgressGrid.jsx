"use client";

export default function ProgressGrid({ diasNecessarios, diasConcluidos, onToggleDia }) {
    const dias = Array.from({ length: diasNecessarios }, (_, i) => i);

    return (
        <div className="flex flex-wrap gap-2">
            {dias.map((dia) => {
                const marcado = diasConcluidos.includes(dia);
                return (
                    <button
                        key={dia}
                        type="button"
                        onClick={() => onToggleDia(dia)}
                        aria-label={`Dia ${dia + 1}`}
                        aria-pressed={marcado}
                        className="w-8 h-8 flex items-center justify-center bg-[#d9d9d9] border border-gray-400 font-bold text-[#29be44] cursor-pointer hover:brightness-95 transition"
                    >
                        {marcado ? "✓" : ""}
                    </button>
                );
            })}
        </div>
    );
}