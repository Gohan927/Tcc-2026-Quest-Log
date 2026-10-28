import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const ARQUIVO = path.join(process.cwd(), "data", "usuarios.json");

async function lerUsuarios() {
    try {
        const texto = await fs.readFile(ARQUIVO, "utf-8");
        return JSON.parse(texto);
    } catch {
        return [];
    }
}

export async function POST(request) {
    const { email } = await request.json();
    const emailLimpo = String(email || "").trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLimpo)) {
        return NextResponse.json({ erro: "E-mail inválido." }, { status: 400 });
    }

    const usuarios = await lerUsuarios();

    // se o e-mail já existe, só deixa entrar (não duplica)
    if (!usuarios.some((u) => u.email === emailLimpo)) {
        usuarios.push({ email: emailLimpo, criadoEm: new Date().toISOString() });
        await fs.mkdir(path.dirname(ARQUIVO), { recursive: true });
        await fs.writeFile(ARQUIVO, JSON.stringify(usuarios, null, 2));
    }

    return NextResponse.json({ ok: true });
}