"use server";

import { redirect } from "next/navigation";
import fs from "fs/promises";
import path from "path";

export async function salvarMissao(formData) {
  const titulo = formData.get("titulo");
  const meta = formData.get("meta");
  const dias = Number(formData.get("dias"));

  const caminho = path.join(process.cwd(), "data", "missoes.json");
  const conteudo = await fs.readFile(caminho, "utf-8").catch(() => "[]");
  const missoes = JSON.parse(conteudo);

  missoes.push({ id: Date.now(), titulo, meta, dias });

  await fs.mkdir(path.dirname(caminho), { recursive: true });
  await fs.writeFile(caminho, JSON.stringify(missoes, null, 2));

  redirect("/");
}