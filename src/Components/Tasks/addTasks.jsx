import React from "react";
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

const AddTasks = () => {

    return(
        <div class='container'>
            <h1>Agregar Tarea</h1>
            <Form type='submit'>
                <FormGroup>
                    <Label>Nombre Tarea:</Label>
                    <Input type='text' placeholder='nombre de la tarea...' autoComplete="off"></Input>
                </FormGroup>
                <Button type="submit" title="Agregar" color="primary">Agregar</Button>
            </Form>
        </div>
    )
}

export default AddTasks;