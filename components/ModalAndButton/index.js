import React, { useState } from "react";
import style from './style.module.css';
import { 
    Button,
    Text  
} from "@chakra-ui/react";


import { FcOk } from 'react-icons/fc'

export default function ModalAndButton(props) {
    const [showModal, setShowModal] = useState(false);
    const isError = props.isError;
    return (
        <div>
            <Button
                onClick={() => setShowModal(true)}
                type="submit"
                mt={10}
                width="100%"
                bg='#00194A'
                color='white'
                fontSize='20px'
                padding={'20px'}
                _hover={'#00194A'}
            >
                ¡ Listo !
            </Button>

            {showModal && !isError ? (
                <div className={`${style.modal}`}>
                    <div className={style.image}>
                        <FcOk/>
                    </div>
                    <Text fontSize='2xl' color='black'>¡ Estas un paso mas cerca de todos tus objetivos !</Text>
                    <Text fontSize='2xl' color='black'>revisa tu bandeja de entrada</Text>
                    <Button
                        onClick={() => setShowModal(false)}
                        type="submit"
                        mt={8}
                        width="50%"
                        bg='#00194A'
                        color='white'
                        fontSize='20px'
                        padding={'10px'}
                        _hover={'#00194A'}
                    >
                        Cerrar
                    </Button>
                </div>
            ) : null}
        </div>

    );
}