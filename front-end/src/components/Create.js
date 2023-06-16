import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct } from "./ProductService";
import CreateForm from "./CreateForm";

function Create() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
    })

    useEffect(() => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            name: id ? prevProduct.name : "",
            description: id ? prevProduct.description : "",
            price: id ? prevProduct.price : "",
            category: id ? prevProduct.category : "",
            image: id ? prevProduct.image : "",
        }));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        createProduct(product).then(() => {
            navigate("/view");
        })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct(product => ({
            ...product,
            [name]: value,
        }));
    };

    return (
        <CreateForm
            product={product}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formTitle="New Product"
            buttonLabel="Save"
            placeholders={{
                name: "Skirt 'Triangle'",
                description: "Black leather midi skirt with a shape of triangle",
                price: "99.99",
                category: "skirt",
                image: "https://example.com/image.jpg"
            }}
        />
    );
}

export default Create;