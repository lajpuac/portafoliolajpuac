'use client';

import { ReactNode, useState } from "react";
import Lateral from "@/components/shared/lateral";
import { RiMenuUnfold2Line } from "react-icons/ri";
import ButtonIcon from "@/components/ui/button.icon";

const MainLayout = ({children}: {children: ReactNode}) =>{
    const [showMenu, setshowMenu] = useState(false);

    return (<div> 
        <Lateral showMenu={showMenu} onClose={() => setshowMenu(false)}/>
        <ButtonIcon 
            icon={RiMenuUnfold2Line} 
            onClick={()=> setshowMenu(true)} 
            className="lg:hiden fixed right-0  bottom-0 z-30 bg-red-400 p-4 rounded-tl-lg"
        />
        {children} 
    </div>);
}  
export default MainLayout;