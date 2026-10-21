import "./global.css";

export const metadata = {
    title: "Quest Log",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className="bg-[#0f0d0a]">{children}</body>
        </html>
    );
}