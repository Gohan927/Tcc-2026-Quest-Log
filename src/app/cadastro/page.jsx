"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CadastroPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");
    const [enviando, setEnviando] = useState(false);

    async function aoEnviar(e) {
        e.preventDefault();
        setErro("");
        setEnviando(true);

        try {
            const resposta = await fetch("/api/cadastro", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const dados = await resposta.json();

            if (!resposta.ok) {
                setErro(dados.erro || "Não foi possível cadastrar.");
                setEnviando(false);
                return;
            }

            localStorage.setItem("questlog_email", email.trim().toLowerCase());
            router.push("/missoes/nova"); // Desktop 2
        } catch {
            setErro("Erro de conexão. Tente de novo.");
            setEnviando(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center p-4">
            <form onSubmit={aoEnviar} className="w-full max-w-md space-y-4">
                <h1 className="text-2xl">Crie sua conta</h1>

                <label htmlFor="email" className="block">E-mail</label>
                <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded p-3"
                    placeholder="voce@exemplo.com"
                />

                {erro && <p role="alert" className="text-red-400">{erro}</p>}

                <button type="submit" disabled={enviando} className="w-full rounded p-3">
                    {enviando ? "Cadastrando..." : "Começar aventura"}
                </button>
            </form>
        </main>
    );
} 

