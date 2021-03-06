import Layout from "../components/layout";
import style from './index.module.css';
import Image from 'next/image';
import bannerprimaria from "./../assets/bannerprimaria.png";
import primaria_info from "./../assets/primaria_info.png";
import FormContact from '../components/FormContact';
import Compenentes from '../components/EducationOfert';
import TestimonyCard from "../components/TestimonyCard";
import { Carousel } from "react-responsive-carousel";
import imagewellnes from "./../assets/image_wellness.png";
import banner_footer_priprimaria from "././../assets/banner_footer_priprimaria.png";
import DemoGenially from "../components/DemoGenially";
import Iframe from "react-iframe";
import primary_info_image_large from '../assets/primaria_info_large.png';



import {
    Button, useMediaQuery, Box, Text
} from "@chakra-ui/react";
export default function primary() {
    const url = 'https://view.genial.ly/62b5dacdc25c0800126ae7ab'

    const [isSmallThan768] = useMediaQuery(`(max-width:769px)`);

    const [isLargeThan1024] = useMediaQuery(`(min-width:1024px)`);

    return (
        <Layout>
            <section className="home_banner_area">
                <div className={style.img_container}>
                    <Image src={bannerprimaria} />
                    <div className={style.form_container}>
                        <FormContact />
                    </div>
                </div>
                <Box>
                    <Image src={primary_info_image_large} />
                </Box>
            </section>
            <section  >
                <div >
                    <div className={style.containerprimaira}>
                        <div>
                            <h1>Ventajas Preescolar Skolmi</h1>
                        </div>
                        <div>
                            <Compenentes />
                        </div>
                        <div>
                            <h1>Opiniones</h1>
                            <h3>Del primaria en Skolmi</h3>
                        </div>
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
                    <Image src={banner_footer_priprimaria} />
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