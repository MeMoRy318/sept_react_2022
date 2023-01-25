import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {commentValidator} from "../../validators/commentValidator";

const CommentForm = ({setComment,upComment}) => {

    const {register,handleSubmit,reset,setValue,formState:{errors,isValid}} = useForm({mode:'all',resolver:joiResolver(commentValidator)})

    useEffect(()=>{

        if (upComment){
            setValue('postId',upComment.postId)
            setValue('name',upComment.name)
            setValue('email',upComment.email)
            setValue('body',upComment.body)
        }
    },[upComment])

   const submit = async (data) => {


       await setComment({...data})

       reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <input type="text" {...register('postId')} placeholder={'postId'}/>
                {errors.postId && <span>{errors.postId.message}</span> }
            </div>
            <div>
                <input type="text" {...register('name')} placeholder={'name'}/>
                {errors.name && <span>{errors.name.message}</span> }
            </div>
            <div>
                <input type="text" {...register('email')} placeholder={'email'}/>
                {errors.email && <span>{errors.email.message}</span> }

            </div>
            <div>
                <input type="text" {...register('body')} placeholder={'body'}/>
                {errors.body && <span>{errors.body.message}</span> }
            </div>
            <button disabled={!isValid && true}>Send</button>
        </form>
    );
};

export {CommentForm};