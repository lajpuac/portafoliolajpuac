import Link from "next/link";
import { RiAccountBoxLine } from "react-icons/ri";
import { cn } from "../../../../libs/utils";

const Menu = () => {
    return (
        <ul>
            <li>
                <Link href='/' className={cn('flex items-center gap-4')}> 
                    <RiAccountBoxLine size={21}/> ¿Quien Soy?
                </Link>
                <Link href=''></Link>
                <Link href=''></Link>
                <Link href=''></Link>
            </li>
        </ul>
    )
}
export default Menu;