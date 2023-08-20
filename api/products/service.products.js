import productsDal from './dal.products.js'
import Utils from '../../utils/Utils.js'

const getProducts = async () => {
    const products = await productsDal.getProducts();
    return products;
};

const getProduct = async (_id) => {
    const product = await productsDal.getProduct(_id);
    return product;
};

const addProduct = async (newProduct) => {
    const createdProduct = await productsDal.addProduct(newProduct);
    return createdProduct
}

const updateProduct = async (productForUpdate) => {
    const updatedProduct = await productsDal.updateProduct(productForUpdate);
    return updatedProduct
}

const deleteProduct = async (ProductId) => {
    const deletedProduct = await productsDal.deleteProduct(ProductId);
    return deletedProduct
}

const updateProperty = async (id, propertyForUpdate) => {
    const property = Object.keys(propertyForUpdate)[0]
    const propertyValue = propertyForUpdate[property]
    const updatedProduct = await productsDal.updateProperty(id, property, propertyValue);
    return updatedProduct
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