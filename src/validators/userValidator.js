import Joi from "joi";

const userValidator = Joi.object({

    name:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({

        'string.pattern.base':'Тільки букви від 1 до 20'

    }),
    username:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({

        'string.pattern.base':'Тільки букви від 1 до 20'

    }),

    website:Joi.string().regex(/^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/).required().messages({

        'string.pattern.base':'URL некоректний'

    }),

    email:Joi.string().regex(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/).required().messages({

        'string.pattern.base':'email некоректний'

    }),

    phone:Joi.string().regex( /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/).required().messages({

        'string.pattern.base':'phone некоректний'
    })

});

export {userValidator};