import React from "react";
import {Button} from 'reactstrap'

const CardTask = () => {

    return(
        <>
            <li>
                <p>Nombre de la tarea</p>
                <Button color='primary'>Borrar</Button>
            </li>
        </>
    )
}

export default CardTask;