import Joi from "joi";

const userValidate = (req, res, next) => {
    const userSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(100).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)/).required(),
        isAdmin: Joi.boolean().required(),
        creator: Joi.number().required(),
    });
    const user = req.body

    const { error, value } = userSchema.validate(user);

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

export default {userValidate, idValidate}