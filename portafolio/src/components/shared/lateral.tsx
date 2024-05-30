"use client";

import Link from "next/link";
import Menu from "@/components/shared/menu";
import { cn } from "@/libs/utils";

interface LateralProps  {
    showMenu: boolean;
    onClose: () => void;
}

const Lateral = ({showMenu, onClose}: LateralProps) => {

    
    return (
        <>
            <aside className={cn(
                "fixed top-0 lg:left-0 bg-background w-[70vw] md:w-[30vw] lg:w-[20vw] xl:w-[13vw] h-full border-r border-gray-300/30 transition-all duration-300 ease-in-out z-50", 
                showMenu ? 'left-0' : '-left-full'
                )}
            >
                <section className="p-8 border-b border-gray-300/30">
                    <Link 
                        href='/' 
                        className="text-lg text-white hover:text-primary transition-colors duration-300" >
                        Leysi Ajpuac
                    </Link>
                    <h3 className="text-blue-200 font-light">Estudiante</h3>
                </section>
                <section>
                    <Menu/>
                </section>
            </aside>
            <div 
                onClick={onClose}
                className={cn(
                    "fixed bg-black/20 z-40 left-0 top-0 w-full h-full lg:hidden", 
                    showMenu ? 'block' : 'hidden'
                )}
            />
        </>
    )
}

export default Lateral;