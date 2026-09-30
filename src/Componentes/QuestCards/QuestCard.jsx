export default function QuestCard({ missao, onClick }) {
    return (
        <div
            onClick={onClick}
            className="bg-[#d9d9d9] w-[262px] h-[244px] flex items-end p-4 cursor-pointer hover:brightness-95 transition"
        >
            <p className="font-['Holtwood_One_SC'] text-black text-xl">
                {missao.meta || "Sem título"}
            </p>
        </div>
    );
}