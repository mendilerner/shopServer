import productsService from './service.products.js'
import { v4 as uuidv4 } from 'uuid';


const getProducts = async (req, res) => {
    try {
        const products = await productsService.getProducts();
        res.json(products);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "server error" })
    }
};

const getProduct = async (req, res) => {
    try {
        const currentId = Number(req.params.id)
        console.log('enter to product/', currentId);
        const product = await productsService.getProduct(currentId);
        if (!product) {
            res.status(400).json({message: 'product does not exist'})
        }
        else {
            res.status(200).json(product)
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "server error" })
    }

};

const addProduct = async (req, res) => {
    try {
        const newProduct = req.body
        const createdProduct = await productsService.addProduct(newProduct)
        res.status(200).json(createdProduct)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "server error" })
    }

}

const updateProduct = async (req, res) => {
    try {
        const ProductId = Number(req.params.id);
        const ProductForUpdate = req.body;
        ProductForUpdate.id = ProductId
        const updatedProduct = await productsService.updateProduct(ProductForUpdate);
        if (updatedProduct === false) {
            res.json({ error: 'Product has not exist' })
            return
        }
        res.status(200).json(updatedProduct)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "server error" })
    }

}

const deleteProduct = async (req, res) => {
    try {
        const ProductId = Number(req.params.id)
        const deletedProduct = await productsService.deleteProduct(ProductId)
        if (deletedProduct) {
            res.status(200).json(deletedProduct)
        }
        else if (deletedProduct === false) {
            res.send('Product does not exist')
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "server error" })
    }


}

const updateProperty = async (req, res) => {
    try {
        const productId = Number(req.params.id);
        const propertyForUpdate = req.body;
        console.log(propertyForUpdate);
        const updatedProduct = await productsService.updateProperty(productId, propertyForUpdate);
        if (updatedProduct === false) {
            res.send('Product has not exist')
            return
        }
        res.status(200).json(updatedProduct)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "server error" })
    }

}


const funcs = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    updateProperty
}
export default funcs