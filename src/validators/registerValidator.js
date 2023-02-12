import Joi from "joi";


const registerValidator = Joi.object({

    username:Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).required().messages({
        'string.pattern.base':'Тільки букви від 1 до 20 символів',
        'string.empty':'Поле пусте'
    }),

    password:Joi.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).required().messages({
        'string.pattern.base':'від 8 до 20 символів',
        'string.empty':'Поле пусте'
    })
});

export {registerValidator};