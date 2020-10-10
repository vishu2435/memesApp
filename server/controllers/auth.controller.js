import User from '../models/user.models'
import jwt from 'jsonwebtoken'
import expressjwt from 'express-jwt'
import config from '../../config/config'
const signin=(req,res)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(err||!user){
            return res.status('401').json({
                error:"User Not Found"
            })
        }
        if(!user.authenticate(req.body.password)){
            return res.status('401').json({
                error:"Email and password dont match"
            })
        }
        const token=jwt.sign({_id:user._id},config.jwtSecret,{expiresIn:'1h'})
        res.cookie('t',token,{
            expire:new Date()+9999
        })
        return res.json({
            token,
            user:{_id:user._id,email:user.email,name:user.name,bio:user.about}
        })
    })
}
const signout=(req,res)=>{
    res.clearcookie('t')
    return res.status(200).json({
        message:"User Sign out"
    })
}
const requireSignin=expressjwt({
    secret:config.jwtSecret,
    algorithms: ['HS256'],
    requestProperty:'auth'
})
const hasAuthorization=(req,res,next)=>{
    console.log("The Request is ---------------------------->",req)
    const authorized=req.profile && req.auth && req.auth._id.toString()===req.profile._id.toString()
    if(!authorized){
        return res.status('403').json({
            error:'User is not authorized'
        })
    }
    next()
}

export default {signin,signout,requireSignin,hasAuthorization}
