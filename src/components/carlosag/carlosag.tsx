import { useState } from 'react'

import Grid from '@mui/material/Grid2'
import Rating from '@mui/material/Rating'
import TextField from '@mui/material/TextField';


//Declaro la interface del componente.
export interface CarlosAGProps {
    text: string; //prop text de tipo string. Es el texto del campo
    disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
}
//Defino mi componente CustomButton y le digo que las props son las que definí arriba
function CarlosAG(props: CarlosAGProps) {
    //Paso el valor de las props a un objeto:
    const { disabled, text} = props

    const [rating, setRating] = useState(0);
    const [password, setPassword] = useState('');


    function evalPswd(event : any) {
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

        return 
    }

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
                    <br/>
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
