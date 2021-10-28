import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductFullScreen } from "../components/productFullScreen/ProductFullScreen";
import { SliderProducts } from "../components/sliderProductos/SliderProducts";

const DetailsProduct = ({productos}) => {
    const [producto, setProducto] = useState([]);

    const { productId } = useParams();

    useEffect(() => {
        const getProducto = async () => {
            const response = await axios.get(
                `http://localhost:4000/api/productos/${productId}`
            );
            setProducto(response.data);
            console.log(response);
        }
        getProducto();
    }, [productId]);

    return (
        <>
            <div>
                <ProductFullScreen producto={producto} />
            </div>
            <div className="mt-5 text-center">
            <SliderProducts productos={productos} />
            </div>
        </>
    );
};

export default DetailsProduct;