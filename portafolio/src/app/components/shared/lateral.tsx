import Link from "next/link";
import Menu from "@/app/components/shared/menu";

const Lateral = () => {
    return (
        <aside className="fixed bg-background w-[13vw] h-full border-r border-gray-300/30">
            <section className="px-5 py-8 border-b border-gray-300/30">
                <Link href='/' className="text-lg text-white hover:text-primary transition-colors duration-300" >
                    Leysi Ajpuac
                </Link>
                <h3 className="text-blue-200 font-light">Estudiante</h3>
            </section>
            <section>
                <Menu/>
            </section>
        </aside>
    )
}

export default Lateral;