import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Box } from '@mui/material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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
                style={{ height: "300px" }}
            >
                <SwiperSlide >
                    <Grid container height={"100%"}>
                        <Grid item
                            xs={12} md={6} lg={3}
                            style={{
                                backgroundImage: `url("https://swiperjs.com/demos/images/nature-1.jpg")`,
                                width: "100%", height: "100%",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}>

                        </Grid>
                        <Grid item xs={12} md={6} lg={3}
                            style={{
                                backgroundImage: `url("https://swiperjs.com/demos/images/nature-2.jpg")`,
                                width: "100%", height: "100%",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }}>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <div style={{
                                backgroundImage: `url("https://swiperjs.com/demos/images/nature-3.jpg")`,
                                width: "100%", height: "100%",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }}>ACA VA LA DESC</div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                            <div style={{
                                backgroundImage: `url("https://swiperjs.com/demos/images/nature-4.jpg")`, width: "100%", height: "100%", backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }}></div>
                        </Grid>
                    </Grid>

                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
            </Swiper>
            <div style={{ backgroundImage: `url("https://swiperjs.com/demos/images/nature-1.jpg")`, width: "100%", height: "100%" }}></div>
        </>
    );
}
