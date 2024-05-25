import Link from "next/link";
import { RiAccountBoxLine, RiStackFill, RiContactsFill, RiEditFill } from "react-icons/ri";
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
        label: 'Contactame',
        icono: RiContactsFill,
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
                        className={cn('flex items-center gap-4 text-purple-300 p-5 border-b border-gray-300/30')}
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