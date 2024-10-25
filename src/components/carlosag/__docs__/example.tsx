import React from "react";
//importamos nuestro componente CustomButton y sus props
import CarlosAG, { CarlosAGProps } from "../carlosag";
//Creamos un componente Example al cual le pasaremos las props definidas
//en nuestro componente CustomButton. Luego renderizamos nuestro componente
//<CustomButton /> con esas props. La idea es que llamemos al componente Example
//con valores de las props para renderizar el componente <CustomButton /> de diferentes
//maneras, es decir, crear una historia de renderizados de nusetro componente.
function Example(props: CarlosAGProps){
 return(
 <CarlosAG
 text={props.text}
 disabled={props.disabled}
 />
 )
}
export default Example