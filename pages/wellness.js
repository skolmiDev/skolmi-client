import Layout from "../components/layout";
import style from './wellness.module.css';
import Image from "next/image";

// Image import 
import bienestar_estudiantil_banner from '../assets/Bienestar_Estudiantil_1920_banner.png';
import equipo_de_bienestar from '../assets/Equipo_de_bienestar.png';
import orientacion_vocacional from '../assets/Orientacion_vocacional.png';
import psicorientacion from '../assets/Psicorientacion.png';


import { Grid, GridItem, useMediaQuery } from '@chakra-ui/react'
import { Box, Button, Text, } from "@chakra-ui/react";

import React from "react";



export default function Wellness() {
    const [buttonActivate1, setButtonActivate1] = React.useState(true)
    const [buttonActivate2, setButtonActivate2] = React.useState(false)
    const [buttonActivate3, setButtonActivate3] = React.useState(false)

    const [isSmallThan768] = useMediaQuery(`(max-width:768px)`);

    return (
        <>
            <Layout>
                <Box className={style.banner_container}>
                    <Box className={style.img_container} bg="#007B77">
                        <Image src={bienestar_estudiantil_banner} />
                    </Box>
                </Box>
                <Box bg='#007B77' display='flex' justifyContent='center' >
                    <Text fontSize={35} color={"white"} fontWeight='semibold' >
                        Bienestar Estudiantil
                    </Text>
                </Box>
                <Box>
                    <Box display='flex' paddingTop={10} paddingLeft={5} paddingRight={5} justifyContent='center' flexWrap='wrap'>
                        <Box width={315} height={62}>
                            <Button
                                onClick={() => {
                                    setButtonActivate1(true);
                                    setButtonActivate2(false);
                                    setButtonActivate3(false);
                                }}
                                width="100%"
                                bg={buttonActivate1 ? '#FF8C00' : '#00194A'}
                                color='white'
                                height='100%'
                                fontSize='20px'
                                padding={10}
                                _hover={{ bg: '#FF8C00' }}
                            >
                                Psicorientaci??n
                            </Button>
                        </Box>
                        <Box width={315} height={62} marginLeft={3} marginRight={3}>
                            <Button
                                onClick={() => {
                                    setButtonActivate1(false);
                                    setButtonActivate2(true);
                                    setButtonActivate3(false);
                                }} width="100%"
                                bg={buttonActivate2 ? '#FF8C00' : '#00194A'}
                                color='white'
                                height='100%'
                                fontSize='20px'
                                _hover={{ bg: '#FF8C00' }}

                            >
                                Orientaci??n <br /> vocacional y profesional
                            </Button>
                        </Box>
                        <Box width={315} height={62}>
                            <Button
                                onClick={() => {
                                    setButtonActivate1(false);
                                    setButtonActivate2(false);
                                    setButtonActivate3(true);
                                }} width="100%"
                                bg={buttonActivate3 ? '#FF8C00' : '#00194A'}
                                color='white'
                                height='100%'
                                _hover={{ bg: '#FF8C00' }}
                                fontSize='20px'
                            >
                                Equipo de Bienestar
                            </Button>
                        </Box>
                    </Box>
                    {buttonActivate1 ?
                        <Box margin={10}>
                            {isSmallThan768 ?
                                <Box display='flex' justifyContent='center'>
                                    <Box maxWidth={555} marginBottom={5} className={style.shadow} display='flex' flexWrap='wrap' justifyContent='center'>
                                        <Box>
                                            <Image src={psicorientacion} />
                                        </Box>
                                        <Box p={10} flexDirection='column' display='flex'>
                                            <Text fontSize={25} textAlign='center' fontWeight='800'>
                                                Psicorientaci??n
                                            </Text>
                                            <Text textAlign='center'>
                                                Brinda apoyo y acompa??amiento a todos los miembros de la familia Skolmi tanto al inicio como en el transcurso de sus estudios en Skolmi, facilitando la adaptaci??n de las familias a la modalidad de estudio virtual, asesorando a padres y docentes, guiando las actividades del servicio social estudiantil, dirigiendo el programa de orientaci??n vocacional y profesional para estudiantes de ??ltimo a??o y el de egresados y desarrollando actividades de promoci??n y prevenci??n hacia toda la comunidad educativa.
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                                :
                                <Box marginBottom={5} display='flex' justifyContent='center'>
                                    <Box minWidth={500}>
                                        <Image src={psicorientacion} />
                                    </Box>
                                    <Box paddingTop='20px' paddingRight='100px' paddingLeft='100px' maxWidth={940} display='flex' flexDirection='column'>
                                        <Text fontSize={25} textAlign='center' fontWeight='800'>
                                            Psicorientaci??n
                                        </Text>
                                        <Text fontSize={16} textAlign='center'>
                                            Brinda apoyo y acompa??amiento a todos los miembros de la familia Skolmi tanto al inicio como en el transcurso de sus estudios en Skolmi, facilitando la adaptaci??n de las familias a la modalidad de estudio virtual, asesorando a padres y docentes, guiando las actividades del servicio social estudiantil, dirigiendo el programa de orientaci??n vocacional y profesional para estudiantes de ??ltimo a??o y el de egresados y desarrollando actividades de promoci??n y prevenci??n hacia toda la comunidad educativa.
                                        </Text>
                                    </Box>
                                </Box>
                            }
                        </Box>
                        :
                        null
                    }
                    {buttonActivate2 ?
                       <Box margin={10}>
                            {isSmallThan768 ?
                                <Box display='flex' justifyContent='center'>
                                    <Box maxWidth={555} marginBottom={5} className={style.shadow} display='flex' flexWrap='wrap' justifyContent='center'>
                                        <Box>
                                            <Image src={orientacion_vocacional} />
                                        </Box>
                                        <Box p={10} flexDirection='column' display='flex'>
                                            <Text fontSize={25} textAlign='center' fontWeight='800'>
                                                Orientaci??n Vocacional y profesional
                                            </Text>
                                            <Text textAlign='center'>
                                                El programa de Orientaci??n Vocacional y Profesional de Skolmi que se brinda a nuestros estudiantes en los grados noveno, d??cimo y once, parte de la necesidad de autoconocimiento de los estudiantes con el fin de que reconozcan sus fortalezas para potencializarlas, pero tambi??n sus debilidades para superarlas, e identifiquen sus caracter??sticas personales y las orienten en sus proyectos de vida. Lleva al estudiante a pensar en su futuro teniendo en cuenta su historia de vida y proyect??ndose en el tiempo para que tome de manera intensional buenas decisiones y aproveche las oportunidades que le permitan alcanzar sus metas y objetivos.
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                                :
                                <Box marginBottom={5} display='flex' justifyContent='center'>
                                    <Box minWidth={500}>
                                        <Image src={orientacion_vocacional} />
                                    </Box>
                                    <Box paddingTop='20px' paddingRight='100px' paddingLeft='100px' maxWidth={940} display='flex' flexDirection='column'>
                                        <Text fontSize={25} textAlign='center' fontWeight='800'>
                                            Orientaci??n Vocacional y profesional
                                        </Text>
                                        <Text fontSize={16} textAlign='center'>
                                            El programa de Orientaci??n Vocacional y Profesional de Skolmi que se brinda a nuestros estudiantes en los grados noveno, d??cimo y once, parte de la necesidad de autoconocimiento de los estudiantes con el fin de que reconozcan sus fortalezas para potencializarlas, pero tambi??n sus debilidades para superarlas, e identifiquen sus caracter??sticas personales y las orienten en sus proyectos de vida. Lleva al estudiante a pensar en su futuro teniendo en cuenta su historia de vida y proyect??ndose en el tiempo para que tome de manera intensional buenas decisiones y aproveche las oportunidades que le permitan alcanzar sus metas y objetivos.
                                        </Text>
                                    </Box>
                                </Box>
                            }
                        </Box>
                        :
                        null
                    }
                    {buttonActivate3 ?
                         <Box margin={10}>
                            {isSmallThan768 ?
                                <Box display='flex' justifyContent='center'>
                                    <Box maxWidth={555} marginBottom={5} className={style.shadow} display='flex' flexWrap='wrap' justifyContent='center'>
                                        <Box>
                                            <Image src={equipo_de_bienestar} />
                                        </Box>
                                        <Box p={10} flexDirection='column' display='flex'>
                                            <Text fontSize={25} textAlign='center' fontWeight='800'>
                                                Equipo de bienestar
                                            </Text>
                                            <Text textAlign='center'>
                                                El ??rea de bienestar estudiantil en Skolmi, tiene como objetivo proporcionar a los usuarios informaci??n y soporte con relaci??n a los servicios que ofrece nuestra plataforma educativa. Adem??s, canaliza las quejas, reclamos y sugerencias. Nuestra funci??n generalmente es realizada a trav??s del canal telef??nico, pero tambi??n puede darse por correo electr??nico, whatsapp, chat en l??nea y redes sociales.
                                                Nuestro compromiso es el de orientar, informar, solucionar, y apoyar a todos nuestros usuarios brind??ndole una experiencia memorable y excelente. Trabajando en equipo con las dem??s ??reas para lograrlo y teniendo los siguientes pilares cada una de las personas que trabajamos en el ??rea; empat??a, tiempo y esfuerzo, expectativas, personalizaci??n, resoluci??n e integridad.
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                                :
                                <Box marginBottom={5} display='flex' justifyContent='center'>
                                    <Box minWidth={500}>
                                        <Image src={equipo_de_bienestar} />
                                    </Box>
                                    <Box paddingTop='20px' paddingRight='100px' paddingLeft='100px' maxWidth={940} display='flex' flexDirection='column'>
                                        <Text fontSize={25} textAlign='center' fontWeight='800'>
                                            Equipo de bienestar
                                        </Text>
                                        <Text fontSize={16} textAlign='center'>
                                            El ??rea de bienestar estudiantil en Skolmi, tiene como objetivo proporcionar a los usuarios informaci??n y soporte con relaci??n a los servicios que ofrece nuestra plataforma educativa. Adem??s, canaliza las quejas, reclamos y sugerencias. Nuestra funci??n generalmente es realizada a trav??s del canal telef??nico, pero tambi??n puede darse por correo electr??nico, whatsapp, chat en l??nea y redes sociales.
                                            Nuestro compromiso es el de orientar, informar, solucionar, y apoyar a todos nuestros usuarios brind??ndole una experiencia memorable y excelente. Trabajando en equipo con las dem??s ??reas para lograrlo y teniendo los siguientes pilares cada una de las personas que trabajamos en el ??rea; empat??a, tiempo y esfuerzo, expectativas, personalizaci??n, resoluci??n e integridad.
                                        </Text>
                                    </Box>
                                </Box>
                            }
                        </Box>
                        :
                        null
                    }
                </Box>
                <Box>
                    {isSmallThan768 ?
                        <Box padding={5}>
                            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                                <GridItem w='100%' maxHeight='109' bg='#D9D9D9' borderRadius={10}>
                                    <Text fontSize='16px' textAlign='center' padding={5} fontWeight='bold'>
                                        C??mara al<br/>hombro
                                    </Text>
                                </GridItem>
                                <GridItem w='100%' maxHeight='109' bg='#D9D9D9' borderRadius={10}>
                                    <Text fontSize='16px' textAlign='center' padding={5} fontWeight='bold'>
                                        Semana<br/>ambiental
                                    </Text>
                                </GridItem>
                                <GridItem w='100%' maxHeight='109' bg='#D9D9D9' borderRadius={10}>
                                    <Text fontSize='16px' textAlign='center' padding={5} fontWeight='bold'>
                                        Peri??dico<br/>estudiantil
                                    </Text>
                                </GridItem>
                                <GridItem w='100%' maxHeight='109' bg='#D9D9D9' borderRadius={10}>
                                    <Text fontSize='16px' textAlign='center' padding={5} fontWeight='bold'>
                                        Expovirtual
                                    </Text>
                                </GridItem>
                                <GridItem w='100%' maxHeight='109' bg='#D9D9D9' borderRadius={10}>
                                    <Text fontSize='16px' textAlign='center' padding={5} fontWeight='bold'>
                                        Maraton<br/>literaria
                                    </Text>
                                </GridItem>
                                <GridItem w='100%' maxHeight='109' bg='#D9D9D9' borderRadius={10}>
                                    <Text fontSize='16px' textAlign='center' padding={5} fontWeight='bold'>
                                        Feria de la<br/>ciencia
                                    </Text>
                                </GridItem>
                            </Grid>
                        </Box>
                        :
                        <Box padding='50px'>
                            <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(1, 1fr)' gap={6}>
                                <GridItem rowSpan={3} bg='#D9D9D9' borderRadius={10}>
                                    <Text fontSize='45px' fontWeight='black' textAlign='center' padding='10px'>
                                        Actividades <br/> extracurriculares
                                    </Text>
                                    <Text fontSize='16px' padding='30px' textAlign='center'>
                                        Es una experiencia educativa innovadora, significativa y transformadora, que desde lo digital electr??nico potencia la comunicaci??n y el aprendizaje. Involucra activamente al estudiante en la resoluci??n de situaciones probl??micas.
                                    </Text>
                                </GridItem>
                                <GridItem w='100%' h='109px' bg='#D9D9D9' borderRadius={10}>
                                    <Text fontSize='25px' textAlign='center' padding={5} fontWeight='bold'>
                                        C??mara al<br/>hombro
                                    </Text>
                                </GridItem>
                                <GridItem w='100%' h='109px' bg='#D9D9D9' borderRadius={10}>
                                    <Text fontSize='25px' textAlign='center' padding={5} fontWeight='bold'>
                                        Semana<br/>ambiental
                                    </Text>
                                </GridItem>
                                <GridItem w='100%' h='109px' bg='#D9D9D9' borderRadius={10}>
                                    <Text fontSize='25px' textAlign='center' padding={5} fontWeight='bold'>
                                        Peri??dico<br/>estudiantil
                                    </Text>
                                </GridItem>
                                <GridItem w='100%' h='109px' bg='#D9D9D9' borderRadius={10}>
                                    <Text fontSize='25px' textAlign='center' padding={5} fontWeight='bold'>
                                        Expovirtual
                                    </Text>
                                </GridItem>
                                <GridItem w='100%' h='109px' bg='#D9D9D9' borderRadius={10}>
                                    <Text fontSize='25px' textAlign='center' padding={5} fontWeight='bold'>
                                        Maraton<br/>literaria
                                    </Text>
                                </GridItem>
                                <GridItem w='100%' h='109px' bg='#D9D9D9' borderRadius={10}>
                                    <Text fontSize='25px' textAlign='center' padding={5} fontWeight='bold'>
                                        Feria de la<br/>ciencia
                                    </Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    }
                </Box>
            </Layout>

        </>
    );
}