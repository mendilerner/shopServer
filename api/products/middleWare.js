import Joi from "joi";

const productValidate = (req, res, next) => {
    const productSchema = Joi.object({
        title: Joi.string().min(3).max(200).required(),
        price: Joi.number().min(1).required(),
        description: Joi.string().min(3).max(800).required(),
        image: Joi.string().uri().required(),
        category: Joi.string().required(),
        rating: Joi.object({
            rate: Joi.number().min(0).max(5).precision(2).required(),
            count: Joi.number().min(0).required()
        }).required(),
        quantity: Joi.number().min(0).required()
    });
    const product = req.body

    const { error, value } = productSchema.validate(product);

    if (error) {
        console.error('Validation Error:', error.details);
        return res.status(400).json({ errors: error.details[0].message });
    } else {
        console.log('Validation Passed:', value);
        next()
    }

}

const idValidate = (req, res, next) => {
    const id = req.params.id
    if (isNaN(id)){
        console.error('id is not valid');
        return res.status(400).json({ error: 'id is not a number' });
    } else {
        next()
    }
}

const patchProductValidate = (req, res, next) => {
    const productSchema = Joi.object({
        title: Joi.string().min(3).max(200).required(),
        price: Joi.number().min(1).required(),
        description: Joi.string().min(3).max(800).required(),
        image: Joi.string().uri().required(),
        category: Joi.string().required(),
        rating: Joi.object({
            rate: Joi.number().min(0).max(5).precision(2).required(),
            count: Joi.number().min(0).required()
        }).required(),
        quantity: Joi.number().min(0).required()
    }).or('title', 'price', 'description', 'image', 'category', 'rating', 'quantity');
    
    const product = req.body

    const { error, value } = productSchema.validate(product);

    if (error) {
        console.error('Validation Error:', error.details);
        return res.status(400).json({ errors: error.details[0].message });
    } else {
        console.log('Validation Passed:', value);
        next()
    }

}
export default {
    productValidate,
    idValidate,
    patchProductValidate,
}