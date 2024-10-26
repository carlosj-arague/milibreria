import { MouseEventHandler } from 'react';

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface MyFavouriteProps {
    color?: "primary"|"secondary"|"info"|"warning"|"error";
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
//Autor: Carlos Jesús Araña Guedes
function MyFavourite(props: MyFavouriteProps) {
    const { color, disabled, onClick} = props
    return (
        <IconButton
            color={color}
            onClick={onClick}
            disabled={disabled}>
                <FavoriteIcon/>
        </IconButton>
    )
}
export default MyFavourite;

