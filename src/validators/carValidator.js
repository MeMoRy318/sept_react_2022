import Joi from "joi";

const carValidator = Joi.object({

    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({

        'string.pattern.base':'Тільки букви від 1 до 20 символів'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({

        'number.max':'Максимальна ціна 1000000',
        'number.min':'Мінімальна ціна 0',
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).messages({
        'number.max':`max year ${new Date().getFullYear()}`,
        'number.min':'min year 1990'
    })

})

export {carValidator};