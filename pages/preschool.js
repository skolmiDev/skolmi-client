import Layout from "../components/layout";
import style from './index.module.css';
import Image from 'next/image';
import preescolar from "./../assets/bannerpreescolar.png";
import preescolar_info from "./../assets/Preescolarinfo.png";
import FormContact from '../components/FormContact';
import Compenentes from '../components/EducationOfert';
import TestimonyCard from "../components/TestimonyCard";
import { Carousel } from "react-responsive-carousel";
import imagewellnes from "./../assets/image_wellness.png";
import banner_footer_preescolar from "././../assets/banner_footer_preescolar.png";
import Iframe from "react-iframe";
import preescolar_info_image_large from '../assets/preescolar_info_large.png';

import {
    Button, useMediaQuery, Box, Text
} from "@chakra-ui/react";
import DemoGenially from "../components/DemoGenially";


export default function preschool() {
    const url = 'https://view.genial.ly/62c838821fa1e10010586f5a';

    return (
        <Layout>
            <section className="home_banner_area">
                <div className={style.img_container}>
                    <Image src={preescolar} />
                    <Box className={style.form_container}>
                        <FormContact />
                    </Box>
                </div>
                <Box>
                    <Image src={preescolar_info_image_large}/>
                </Box>
            </section>
            <section  >
                <div className={style.containerPress}>
                    <div>
                        <h1>Ventajas Preescolar Skolmi</h1>
                    </div>
                    <div>
                        <Compenentes />
                    </div>
                    {/* <div>
                        <h1>Opiniones</h1>
                        <h3>Del Preescolar en Skolmi</h3>
                    </div> */}
                    {/* <div>
                        <Carousel showStatus={false}>
                            <div className={style.carouselItem}>
                                <TestimonyCard />
                                <TestimonyCard />
                                <TestimonyCard />
                            </div>
                        </Carousel>
                    </div> */}
                </div>
            </section>
            <Box background='#00194A'>
                <Text className={style.title}>Objeto Virtual de Aprendizaje (Demo)</Text>
            </Box>
            <Box className={style.containers}>
                <Text>La virtualidad es un sistema de acceso y representaci??n de la realidad  que desde lo digital potencia nuestras habilidades, intensifica nuestras capacidades y se manifiesta a trav??s de actos comunicativos.
                    Los objetos virtuales de aprendizaje son recursos educativos estructurados para hacer del acto de aprendizaje una experiencia significativa a trav??s de la interacci??n, la inmersi??n y la cercan??a de los contenidos.</Text>
            </Box>
            <Box
                maxWidth='1024px'
                margin='auto'
            >
                <DemoGenially>
                    <Iframe
                        url={url}
                        width="100%"
                        height="100%"
                        position="absolute"
                    />
                </DemoGenially>
            </Box>
            <div className="container">
                <div className={style.containerVirtuals}>
                    <Image src={banner_footer_preescolar} />
                    <div className={style.form_containerrigth}>
                        <p className={style.rigthptext}>??No esperes m??s!</p>
                        <p className={style.rigthptext2}>Decidete hoy mismo a estudiar <br></br> virtual en Skolmi.</p>

                    </div>

                    <div className={style.form_container}>
                        <Button background={'#FF8C00'} fontSize={'20px'} fontFamily={'Poppins'} width={'150px'} height={'50px'}>
                            <a color="white" href="https://api.whatsapp.com/send?phone=+573023881611&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20">
                                Empezar
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>

    );
}