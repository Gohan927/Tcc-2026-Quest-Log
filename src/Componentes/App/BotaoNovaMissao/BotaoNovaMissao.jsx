"use client";

import { useRouter } from "next/navigation";

export default function BotaoNovaMissao({ className = "", children = "Nova Missão" }) {
    const router = useRouter();

    function aoClicar() {
        const jaCadastrado = localStorage.getItem("questlog_email");
        router.push(jaCadastrado ? "/missoes/nova" : "/cadastro");
    }

    return (
        <button type="button" onClick={aoClicar} className={className}>
            {children}
        </button>
    );
}