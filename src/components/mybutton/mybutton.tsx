import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';

export interface MyButtonProps {
    text: string;
    txtcolor: string;
    bgcolor: string;
    size?: "small" | "medium" | "large";
    borderColor?: string;
    borderWidth?: string;
    bghover: string;
    texthover: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
//Autor: Carlos Jesús Araña Guedes
function MyButton(props: MyButtonProps) {
    const { bgcolor, text, txtcolor, borderColor, borderWidth, bghover, texthover, disabled, onClick, size } = props
    return (
        <Button
            type='button'
            onClick={onClick}
            disabled={disabled}
            size={size} 
            sx={{ backgroundColor: bgcolor, color: txtcolor,
                border: `${borderWidth} solid ${borderColor}`,
                ':hover': {
                    backgroundColor: bghover,
                    color: texthover
            }}}
        >
            {text}
        </Button>
    )
}
export default MyButton;
