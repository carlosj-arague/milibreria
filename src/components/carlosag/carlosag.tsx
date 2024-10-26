import { useState } from 'react'

import Grid from '@mui/material/Grid2'
import Rating from '@mui/material/Rating'
import TextField from '@mui/material/TextField';

//Autor: Carlos Jesús Araña Guedes
export interface CarlosAGProps {
    text: string; //prop text de tipo string. Es el texto del campo
    disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
}

//Autor: Carlos Jesús Araña Guedes
function CarlosAG(props: CarlosAGProps) {
    const { disabled, text } = props

    const [rating, setRating] = useState(0);
    const [password, setPassword] = useState('');

    //Funcion para evaluar la complejidad de la contraseña
    function evalPswd(event: any) {
        setPassword(event.target.value)
        const pswd = event.target.value
        var currentValue = 0
        if (/\d/.test(pswd)) {
            currentValue++
        }
        if (/[A-Z]/.test(pswd)) {
            currentValue++
        }
        if (/[a-z]/.test(pswd)) {
            currentValue++
        }
        if (pswd.length >= 8) {
            currentValue++
            if (pswd.length >= 12) {
                currentValue++
            }
        }
        setRating(currentValue)
    }

    //Autor: Carlos Jesús Araña Guedes
    return (
        <>
            <Grid container>
                <TextField
                    type='password'
                    disabled={disabled}
                    value={password}
                    label={text}
                    onChange={evalPswd} />
                <Grid>
                    <br />
                    <Rating
                        disabled
                        value={rating}
                        defaultValue={0}
                        max={5} />
                </Grid>
            </Grid>
        </>)
}
export default CarlosAG;
