import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Product = sequelize.define("Product", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.ENUM(['shoes', 'cloth']),
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    supplier: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    { timestamps: true }
);


export default Product;