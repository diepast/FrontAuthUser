import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from '@mui/material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/carroucel.css'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function CarrouselHome() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={`fade`}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"

            >
                <SwiperSlide >
                    <Grid container height={"100%"}>
                        <Grid item
                            className='carrousel_grid_item'
                            xs={12} md={6} lg={3}
                            style={{
                                backgroundImage: `url("https://swiperjs.com/demos/images/nature-1.jpg")`,
                                width: "100%",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}>

                        </Grid>
                        <Grid item xs={12} md={6} lg={3}
                            className='carrousel_grid_item'
                            style={{
                                backgroundImage: `url("https://swiperjs.com/demos/images/nature-2.jpg")`,
                                width: "100%",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }}>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}
                            className='carrousel_grid_item'>

                            <div

                                style={{
                                    backgroundImage: `url("https://swiperjs.com/demos/images/nature-3.jpg")`,
                                    width: "100%",
                                    height: "100%",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat"
                                }}>ACA VA LA DESCRIPCION POR EJEMPLO</div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}
                            className='carrousel_grid_item'>
                            <div

                                style={{
                                    backgroundImage: `url("https://swiperjs.com/demos/images/nature-4.jpg")`,
                                    width: "100%",
                                    height: "100%",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat"
                                }}></div>
                        </Grid>
                    </Grid>

                </SwiperSlide>

                <SwiperSlide >
                    <Grid container height={"100%"}>
                        <Grid item
                            xs={12} md={6} lg={3}
                            className='carrousel_grid_item'
                            style={{
                                backgroundImage: `url("https://images4.alphacoders.com/132/1329876.png")`,
                                width: "100%",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: " center top"
                            }}>

                        </Grid>
                        <Grid item xs={12} md={6} lg={3}
                            className='carrousel_grid_item'
                            style={{
                                backgroundImage: `url("https://i.blogs.es/0396e6/superman-cavill/1366_2000.webp")`,
                                width: "100%",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: " center top "
                            }}>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}
                            className='carrousel_grid_item'>
                            <div style={{
                                backgroundImage: `url("https://i.blogs.es/c12af0/2224860-2011_green_lantern_movie_1680x1050/1366_2000.jpeg")`,
                                width: "100%", height: "100%",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: " center top "
                            }}></div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}
                            className='carrousel_grid_item'>
                            <div style={{
                                backgroundImage: `url("https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/04/iron-man-25-curiosidades-vengador-dorado-marvel_25.jpg?tf=1920x")`,
                                width: "100%",
                                height: "100%",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: " center top"
                            }}></div>
                        </Grid>
                    </Grid>

                </SwiperSlide>

            </Swiper>

        </>
    );
}
