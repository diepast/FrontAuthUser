import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Typography } from '@mui/material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/carroucel.css'

// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';

export default function CarrouselHomeDinamico() {
const data = [
    {
        slide: 1,
        heros: [
            {
                id: 1,
                name: "Batman",
                image: "https://images4.alphacoders.com/132/1329876.png"
            },
            {
                id: 2,
                name: "Superman",
                image: "https://i.blogs.es/0396e6/superman-cavill/1366_2000.webp"
            },
            {
                id: 3,
                name: "Linterna Verde",
                image: "https://i.blogs.es/c12af0/2224860-2011_green_lantern_movie_1680x1050/1366_2000.jpeg"
            },
            {
                id: 4,
                name: "Iron Man",
                image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/04/iron-man-25-curiosidades-vengador-dorado-marvel_25.jpg?tf=1920x"
            },
        ]
    },
    {
        slide:2,
        heros: [
            {
                id: 5,
                name: "Spider Man",
                image: "https://media.revistagq.com/photos/63edfa0ecf53bfbacf6f6580/16:9/w_1600,c_limit/spider-man-4-tom-holland.jpg"
            },
            {
                id: 6,
                name: "Thor",
                image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/04/thor-chris-hemsworth.jpg?tf=1200x"
            },
            {
                id: 7,
                name: "Hulk",
                image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/05/hulk-25-curiosidades-gigante-esmeralda-marvel_0.jpg?tf=1920x"
            },
            {
                id: 8,
                name: "Capitan America",
                image: "https://img1.wallspic.com/previews/1/0/2/3/63201/63201-capitan_america-superheroe-vengadores-personaje_de_ficcion-los_vengadores-x750.jpg"
            },
        ]
    },
    {
        slide: 3,
        heros: [
            {
                id: 9,
                name: "Pantera Negra",
                image: "https://lumiere-a.akamaihd.net/v1/images/cg_disneyplus_blackpanther_mobile_1059_6488e33c.jpeg?region=0,24,1024,577&width=960"
            },
            {
                id: 10,
                name: "Ant Man",
                image: "https://www.mundodeportivo.com/alfabeta/hero/2020/12/Ant-Man-1.jpg?width=1200"
            },
            {
                id: 11,
                name: "Aquaman",
                image: "https://i.blogs.es/12a5f3/aquaman-image2/1366_2000.jpg"
            },
            {
                id: 12,
                name: "Flash",
                image: "https://img.asmedia.epimg.net/resizer/QkIoUCs1a-uyHuIAMLoavDBJ8yw=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/ZD6DKSW2NFKNFN2UYVVA4C6G6E.jpg"
            },
        ]
    }
]

    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={`fade`}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {data && data.map((slide, index) =>(
                   
                    <SwiperSlide key={index}>
                        <Grid container height={"100%"}>

                            {slide.heros.map( hero =>
                                
                                {return (<Grid key={hero.id} item xs={12} sm= {6} md={6} lg={3}
                                    className='carrousel_grid_item'>
                                    <div style={{
                                        backgroundImage: "url(" + hero.image + ")",
                                        width: "100%", height: "100%",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: " center top "
                                    }}>
                                        <div className='carrousel_hero_name_container'></div>
                                        <Typography variant='h5' className="carrousel_hero_name_title">{hero.name}</Typography>
                                    </div>
                                </Grid>)}
                            )}
                        </Grid>
                    </SwiperSlide>)
                )}
            </Swiper>
        </>
    );
}