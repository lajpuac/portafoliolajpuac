import Link from "next/link";
import { RiAccountBoxLine, RiStackFill, RiAccountPinBoxFill, RiEditFill } from "react-icons/ri";
import { cn } from "../../../../libs/utils";

const Menu = () => { 

    const rutas = [
      {
        label: 'Sobre mi',
        icono: RiAccountBoxLine,
        href: '/',
      },
      {
        label: 'Proyectos',
        icono: RiStackFill,
        href: '/proyectos',
      },
      {
        label: 'Contacto',
        icono: RiAccountPinBoxFill,
        href: '/contactame',
      },
      {
        label: 'Blog',
        icono: RiEditFill,
        href: '/blog',
      },
    ];

    return (
        <ul>
            <li>
                {rutas.map((ruta) => (
                    <Link 
                        key={ruta.href} 
                        href={ruta.href} 
                        className={cn('flex items-center gap-4 text-purple-300 py-5 px-8 border-b border-gray-300/30 hover:bg-gray-500/20 hover:text-white transition-colors duration-300')}
                    > 
                        <ruta.icono size={21}/>
                        {ruta.label}
                    </Link>
                ))}
                
            </li>
        </ul>
    )
}
export default Menu;