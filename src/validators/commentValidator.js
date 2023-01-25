const Joi = require("joi");

const commentValidator = Joi.object({

    postId:Joi.number().min(1).max(100).required().messages({

        'number.min':'min id number 1',
        'number.max':'max id number 100',
        'number.required':'only valid',
        'number.base':'only number'

    }),
    name:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({

        'string.pattern':'only string 1 - 20'

    }),
    email:Joi.string().regex(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu).required().messages({

        'string.pattern':'email is not valid'

    }),
    body:Joi.string().required()
});

export {commentValidator}