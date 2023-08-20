import express from 'express';
import productsController from './controller.products.js'
// import emailValidator from './../../middleWare/emailValidator.js';
// import passwordValidator from './../../middleWare/passwordValidator.js';
const router = express.Router();



router.get('/', productsController.getProducts);

router.get('/:id', productsController.getProduct)

router.post('/', productsController.addProduct)

router.put('/:id', productsController.updateProduct)

router.delete('/:id', productsController.deleteProduct)

router.patch('/:id', productsController.updateProperty)


export default router;