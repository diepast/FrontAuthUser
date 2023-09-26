import React from "react";
import "../styles/home.css"
import CarrouselHome from "./carrousel";
import CarrouselHomeDinamico from "./carrouselDinamico";


function Home() {
let tecnologia = "REACT"

    return (
        <>
        <div className="home_main_container">
            <h1>Hola MUNDO!!!!!</h1>
            <h2>Welcome to {tecnologia}</h2>
            <p>Este es un bootcamp sobre el FRAMEWORK de {tecnologia}</p>
        </div>
        <CarrouselHomeDinamico/>
        </>
    )

}

export default Home
