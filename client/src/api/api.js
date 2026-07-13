import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3006/"
});

// Products

export const getProducts = () =>
    API.get("/products");

export const getProductById = (id) =>
    API.get(`/products/${id}`);

export const searchProducts = (keyword) =>
    API.get(`/products/search?query=${keyword}`);


// Cart

export const addToCart = (productId, quantity) =>
    API.post("/cart", {
        productId,
        quantity
    });

export const getCart = () =>
    API.get("/cart");

export const updateCart = (itemId, quantity) =>
    API.put(`/cart/${itemId}`, {
        quantity
    });

export const deleteCartItem = (itemId) =>
    API.delete(`/cart/${itemId}`);

export const clearCart = () =>
    API.delete("/cart");