'use client';

import { ReactNode, useState } from "react";
import Lateral from "@/app/components/shared/lateral";
import { RiMenuUnfold2Line } from "react-icons/ri";


const MainLayout = ({children}: {children: ReactNode}) =>{
    const [showMenu, setshowMenu] = useState(false);

    return (<div> 
        <Lateral showMenu={showMenu} onClose={() => setshowMenu(false)}/>
        <button type="button" className="lg:hidden">
            <RiMenuUnfold2Line onClick={() => setshowMenu(true)} size={30} />
        </button>
        {children} 
    </div>);
}
export default MainLayout;