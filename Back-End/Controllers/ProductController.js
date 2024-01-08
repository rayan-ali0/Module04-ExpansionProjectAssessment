import Product from '../Models/Product.js'


export const createProduct = async (req, res) => {
    const { title, category, price, description, supplier, UserId } = req.body
    try {
        if (!title || !category || !price || !description || !supplier || !UserId) {
            return res.status(404).json({ error: "Fields are required" });

        }
        const product = await Product.create({
            title, category, price, description, supplier, UserId
        });
        if (product) {
            res.status(200).json(product);
        }
        else {
            return res.status(404).json({ error: "Product not created" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }

}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        if (products) {
            res.status(200).json(products);
        }
        else {
            return res.status(404).json({ error: "No products found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }

}

export const getProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findByPk(id);
        if (product) {
            res.status(200).json(product);
        }
        else {
            return res.status(404).json({ error: "No product found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    const { productId, UserId } = req.query
    try {
        const product = await Product.findByPk(productId);
        if (!product) {
            return res.status(404).json({ error: "No product found" });
        }
        else {
            if (Number(product.UserId)===Number(UserId)) {
                await product.destroy()
                return res.status(200).json({ error: "Product deleted" });
            }
            else {
                return res.status(500).json({ error: "You can't delete a product u didnt create" });

            }
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const updateProduct = async (req, res) => {
    const { id, title, category, price, description, supplier, UserId } = req.body
    try {   
        const product = await Product.findByPk(id);
        if (product) {
            if(!UserId){
                return res.status(404).json({ error: "User Id is required" });
            }
            if (Number(product.UserId)===Number(UserId)) {
                if (title) product.title = title
                if (category) product.category = category
                if (price) product.price = price
                if (description) product.description = description
                if (supplier) product.supplier = supplier
                await product.save()
                res.status(200).json(product)
            }

            else {
                return res.status(404).json({ error: "You can't update a product u didnt create" });

            }
        }
        else {
            return res.status(404).json({ error: "Product not created" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }

}
