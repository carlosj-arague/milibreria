import { MouseEventHandler } from 'react';

import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export interface MyFavouriteBorderProps {
    color?: "primary"|"secondary"|"info"|"warning"|"error";
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
//Autor: Carlos Jesús Araña Guedes
function MyFavouriteBorder(props: MyFavouriteBorderProps) {
    const { color, disabled, onClick} = props
    return (
        <IconButton
            color={color}
            onClick={onClick}
            disabled={disabled}>
                <FavoriteBorderIcon/>
        </IconButton>
    )
}
export default MyFavouriteBorder;


