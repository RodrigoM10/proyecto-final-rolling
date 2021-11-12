import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductFullScreen } from "../components/productFullScreen/ProductFullScreen";
import { SliderProducts } from "../components/sliderProductos/SliderProducts";

const DetailsProduct = ({productos, cart, setCart}) => {
    const [producto, setProducto] = useState([]);
    const { productId } = useParams();

    useEffect(() => {
        const getProducto = async () => {
            const response = await axios.get(
                `https://proyecto-final-db.herokuapp.com/api/productos/${productId}`
            );
            setProducto(response.data);
        }
        getProducto();
    }, [productId]);

    return (
        <>
            <div>
                <ProductFullScreen producto={producto} cart={cart} setCart={setCart}  />
            </div>
            <div className="mt-5 text-center">
            <SliderProducts productos={productos} />
            </div>
        </>
    );
};

export default DetailsProduct;