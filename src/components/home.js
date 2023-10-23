import React from "react";
import "../styles/home.css"
import { Grid } from "@mui/material";
import CarrouselHomeDinamico from "./carrouselDinamico";
import ButtonCallToAction from "./buttonCallToAcction";

function Home() {

    return (
        <div className="home_container">
            <div className="home_main_container">
                <div className="home_main_subcontainer"></div>
                <Grid container justifyContent="center">
                    <Grid item height={"40%"} xs={11} sm={9} md={9} lg={6}>
                        <ButtonCallToAction />
                    </Grid>
                </Grid>
            </div>
            <CarrouselHomeDinamico />
        </div >
    )

}

export default Home
