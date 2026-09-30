import Sidebar from "@/Componentes/Sidebar/Sidebar";
import "./global.css";



export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* Layout UI */}
                {/* Place children where you want to render a page or nested layout */}

                <main>{children}</main>

                return (
                <html lang="pt-BR">
                    <body className="bg-[#0f0d0a]">
                        <Sidebar />
                        <main className="ml-64 transition-all duration-300">
                            {children}
                        </main>
                    </body>
                </html>
                );


            </body>
        </html>
    )
}
