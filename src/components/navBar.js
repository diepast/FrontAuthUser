import React, { useState } from "react";
import "../styles/navBar.css"
import { Link as LinkRouter } from 'react-router-dom'

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false)
    // const [time, setTime] = useState(new Date())

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTime(new Date());
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [time])

    // useEffect(() => {
    //     console.log(showMenu)
    // }, [showMenu])



    return (
        <>
            <div className="nav_container">
                <div className="nav_accion_container">
                    {/* <h2>{time.toLocaleTimeString()}</h2> */}
                    <LinkRouter className='navLink_web' to='/' ><h1>Home</h1></LinkRouter>
                    <LinkRouter className='navLink_web' to='/productos/aj36735' ><h1>Productos</h1></LinkRouter>
                </div>
                <div className="nav_button_responsive">
                    <button onClick={() => { setShowMenu(!showMenu) }} className="nav_button_menu ">Menu</button>
                </div>
            </div>
            <div className={showMenu ? " show nav_menu_responsive" : "notshow nav_menu_responsive"}>
                
                    <LinkRouter onClick={() => { setShowMenu(!showMenu) }} className='navLink_mobile' to='/' ><h2>Home</h2></LinkRouter>
                    <LinkRouter onClick={() => { setShowMenu(!showMenu) }} className='navLink_mobile' to='/productos' ><h2>Productos</h2></LinkRouter>
                

            </div>
            {/* {!showMenu ? //OPerador ternario
                <Home /> :
                <h1>No existe componente montado</h1>
            } */}
            {/* {!showMenu && //OPerador simple
                <Home /> 
            } */}
        </>
    )
}

export default NavBar