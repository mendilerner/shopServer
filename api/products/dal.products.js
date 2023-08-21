import { error } from 'console';
import jsonfile from 'jsonfile';
const FILE = './data/products.json';


const getProducts = async () => {
    const data = await jsonfile.readFile(FILE);
    return data
}



const getProduct = async (_id) => {
    const products = await jsonfile.readFile(FILE);
    const product = products.find((product) => product.id === _id);
    return product


}

const addProduct = async (newProduct) => {
    const products = await jsonfile.readFile(FILE);
    const newId = getMaxUserId(products) + 1
    newProduct.id = newId
    products.push(newProduct)
    await jsonfile.writeFile(FILE, products)
    return newProduct
}


const updateProduct = async (productForUpdate) => {
    const products = await jsonfile.readFile(FILE);
    let productIndex = products.findIndex((product) => product.id === productForUpdate.id)
    if (productIndex === -1) {
        return false
    }
    products[productIndex] = productForUpdate;
    await jsonfile.writeFile(FILE, products)
    return productForUpdate
}

const deleteProduct = async (productId) => {
    const products = await jsonfile.readFile(FILE);
    let productIndex = products.findIndex((product) => product.id === productId)
    if (productIndex === -1) {
        return false
    }
    const deletedProduct = products[productIndex]
    products.splice(productIndex, 1)
    await jsonfile.writeFile(FILE, products)
    return deletedProduct
}

const updateProperty = async (_id, property, propertyValue) => {
    const products = await jsonfile.readFile(FILE);
    let productIndex = products.findIndex((product) => product.id === _id)
    if (productIndex === -1) {
        return false
    }
    products[productIndex][property] = propertyValue;
    await jsonfile.writeFile(FILE, products)
    return products[productIndex]
}


const addQuantity = async (_quantitySize) => {
    const products = await jsonfile.readFile(FILE);
    products.forEach(product => {
        product.quantity = Math.round(Math.random() * _quantitySize)
    });
    await jsonfile.writeFile(FILE, products)
    return products
}

const convertID = async (_quantitySize) => {
    const products = await jsonfile.readFile(FILE);
    products.forEach(product => {
        product.quantity = Math.round(Math.random() * _quantitySize)
    });
    await jsonfile.writeFile(FILE, products)
    return products

}

function getMaxUserId(_elements) {
    let maxId = _elements[0].id;
    for (const element of _elements) {
        if (element.id > maxId) {
            maxId = element.id;
        }
    }
    return maxId;
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


