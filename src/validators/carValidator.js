import Joi from "joi";

const carValidator = Joi.object({
    price:Joi.number().max(1000000).min(0).required(),
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required(),
    year:Joi.number().min(1991).max(new Date().getFullYear()).required()
});


export {carValidator};

