import express from 'express';
import productsController from './controller.products.js'
import middleWare from './middleWare.js';
const router = express.Router();



router.get('/', productsController.getProducts);

router.get('/:id', middleWare.idValidate, productsController.getProduct)

router.post('/', middleWare.productValidate, productsController.addProduct)

router.put('/:id', middleWare.idValidate, middleWare.productValidate, productsController.updateProduct)

router.delete('/:id', middleWare.idValidate, productsController.deleteProduct)

router.patch('/:id', middleWare.idValidate, middleWare.patchProductValidate, productsController.updateProperty)


export default router;