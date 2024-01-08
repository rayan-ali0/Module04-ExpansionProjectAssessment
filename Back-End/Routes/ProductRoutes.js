import express from "express"
import {createProduct, getProducts, getProduct,deleteProduct,updateProduct} from "../Controllers/ProductController.js";
const productRoute = express.Router();

productRoute.get("/All", getProducts);
productRoute.get("/byId/:id", getProduct);
productRoute.post("/create", createProduct);
productRoute.delete("/delete", deleteProduct);
productRoute.put("/update", updateProduct);

export default productRoute;