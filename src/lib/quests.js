const STORAGE_KEY = "questlog-missions";

export function getMissions() {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveMission(missao) {
    const missoes = getMissions();
    missoes.push(missao);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(missoes));
}

export function getMissionById(id) {
    return getMissions().find((m) => m.id === id);
}

export function updateMission(id, dadosAtualizados) {
    const missoes = getMissions().map((m) =>
        m.id === id ? { ...m, ...dadosAtualizados } : m
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(missoes));
}