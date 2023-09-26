import React from "react";
import { useParams } from "react-router-dom";

function ProductsContainer() {
    const { idProd } = useParams()
    return (
        <>
            <h1>Pagina de PRODUCTOS En CONSTRUCCION</h1>
            <h2>Id del producto {idProd}</h2>
        </>
    )
}

export default ProductsContainer