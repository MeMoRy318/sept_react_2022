import Joi from "joi";


const carValidator = Joi.object({

      brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
          'string.pattern.base':'Тільки букви від 1 до 20 символів',
          'string.empty':'Поле пусте'
      }),

    price:Joi.number().min(0).max(1000000).required().messages({
        'number.min':'мін сума 0',
        'number.max':'макс сума 1000000',
    }),

    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min':'min year 1990',
        'number.max':`'max year ${new Date().getFullYear()}`,
    })
});

export {carValidator};