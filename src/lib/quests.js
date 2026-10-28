"use server";
import { promises as fs } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

const ARQUIVO = path.join(process.cwd(), "data", "missions.json");

async function ler() {
    try {
        const texto = await fs.readFile(ARQUIVO, "utf-8");
        return JSON.parse(texto);
    } catch {
        return []; // arquivo ainda não existe
    }
}

async function escrever(missoes) {
    await fs.mkdir(path.dirname(ARQUIVO), { recursive: true });
    await fs.writeFile(ARQUIVO, JSON.stringify(missoes, null, 2), "utf-8");
}

export async function getMissions() {
    return await ler();
}

export async function saveMission(missao) {
    const missoes = await ler();
    const i = missoes.findIndex((m) => m.id === missao.id);
    if (i >= 0) missoes[i] = missao; // atualiza (ex.: marcar dias)
    else missoes.push(missao);       // cria
    await escrever(missoes);
    revalidatePath("/", "layout");
}

export async function deleteMission(id) {
    const missoes = await ler();
    await escrever(missoes.filter((m) => m.id !== id));
    revalidatePath("/", "layout");
}

export async function getMissionById(id) {
    const missoes = await ler();
    return missoes.find((m) => m.id === id) || null;
}

export async function updateMission(id, alteracoes) {
    const missoes = await ler();
    const novas = missoes.map((m) =>
        m.id === id ? { ...m, ...alteracoes } : m
    );
    await escrever(novas);
    revalidatePath("/", "layout");
}