import { cn } from "@/libs/utils";
import { IconType } from "react-icons/lib";

interface ButtonIconProps {
    icon: IconType;
    onClick: () => void;
    className?: string;
}
const ButtonIcon= ({icon: Icon, className, onClick}: ButtonIconProps) => {
	return(
    <button type="button" className={cn('', className)} onClick={onClick}>
        <Icon size={30} />
    </button>);
}
export default ButtonIcon;