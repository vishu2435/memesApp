import User from '../models/user.models' 
import errorHandler from './error.controller'
import  _ from 'lodash'
import formidable from 'formidable'
import fs from 'fs'
import { filter } from 'compression'

const create=(req,res,next)=>{
    let form = new formidable.IncomingForm()
    form.keepExtensions=true
    console.log("Logging from [create] [user.contorller.js] ",form)
    form.parse(req,(err,fields,files)=>{
        if(err){
            return res.status(400).json({
                error: `Photo could not be uploaded ${err}`
            })
        }
        console.log("Logging from [create] [user.contorller.js] ",fields)
        let user=new User(fields)
        // user.updated=Date.now()
        if(files.photo){
            user.photo.data=fs.readFileSync(files.photo.path)
            user.photo.contentType=files.photo.type
        }
        // return res.json(user)
        user.save((err,result)=>{
            if(err){
                return res.status(400).json({
                    error:"Some error occuured "+err
                })
            }
            user.hashed_password=undefined
            user.salt=undefined
            return res.json(result)
        })
    })
    
}
const temporaryImageData=(req,res)=>{
    let form = new formidable.IncomingForm()
    form.keepExtensions=true
    form.parse(req,(err,fields,files)=>{
        if(err){
            return res.status(400).json({
                error:`Some Error Occered while Uploading ${err}`
            })
        }
        let photoData=fs.readFileSync(files.photo.path)
        // res.set('Content-Type',)
        return res.json({data:photoData})
    })
}
const list=(req,res,next)=>{
    User.find((err,users)=>{
        if(err){
           return res.status(400).json({
                error:errorHandler.getErrorMessage(err)
            })
        }
        return res.status(200).json(users)
    }).select('name email updated created')
}
const read=(req,res,next)=>{
    // console.log("The Request is ---------------------------->",req)
    req.profile.salt=undefined
    req.profile.hashed_password=undefined
    return res.status(200).json(req.profile)
}
const update=(req,res,next)=>{
    let form =new formidable.IncomingForm()
 
    form.keepExtensions=true

    form.parse(req,(err,fields,files)=>{
        if(err){
            return res.status(400).json({
                error: `Photo could not be uploaded ${err}`
            })
        }
        let user =req.profile
        user=_.extend(user,fields)
        user.updated=Date.now()
        if(files.photo){
            user.photo.data=fs.readFileSync(files.photo.path)
            user.photo.contentType=files.photo.type
        }
        user.save((err,result)=>{
            if(err){
                return res.status(400).json({
                    error:"Some error occuured "+err
                })
            }
            user.hashed_password=undefined
            user.salt=undefined
            res.json(user)
        })
    })
}
const remove=(req,res,next)=>{
    let user=req.profile
    user.remove((err,deletedUser)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler.getErrorMessage(err)
            })
        }
        deletedUser.hashed_password=undefined
        deletedUser.salt=undefined
        return res.status(200).json(deletedUser)
    })
}
const userById=(req,res,next,id)=>{
    console.log("In user By Id Method ",req)
    User.findById(id)
    .populate('following','_id name')
    .populate('followers','_id name')
    .exec((err,user)=>{
        if(err){
          return  res.status(400).json({
                error:"Some error is there [userBy id]"+err
            })
        }
        req.profile=user
        next()
    })
}
const photo=(req,res,next)=>{
    if(req.profile.photo.data){
        res.set('Content-Type',req.profile.photo.contentType)
        return res.send(req.profile.photo.data)
    }
    next()
}//
const addFollowing=(req,res,next)=>{
    console.log("user data is from [user.controller.js].... ",req.body)
    User.findByIdAndUpdate(req.body.userId,{$push:{following:req.body.followId}},(err,result)=>{
        if(err){
            return res.status(400).json({
                error:`Error Occured ${err}`
            })
        }
        next()
    })
}
const addFollower=(req,res)=>{
    User.findByIdAndUpdate(req.body.followId,{$push:{followers:req.body.userId}},{new:true})
    .populate('following','_id name')
    .populate('followers','_id name')
    .exec((err,result)=>{
        if(err){
            return res.status(400).json({
                error:`Error Occured ${err}`
            })
        }
        result.hashed_password=undefined
        result.salt=undefined
        return res.json(result)
    })
}
const removeFollowing=(req,res,next)=>{
    console.log("From [user.controller.js] [removeFollowing]",req.body)
    User.findByIdAndUpdate(req.body.userId,{$pull:{following:req.body.unFollowId}},(err,result)=>{
        if (err) {
            return res.status(400).json({
              error: 'Error occured ${err}'
            })
          }
          next()
    })
  
}
const removeFollower=(req,res)=>{
      User.findByIdAndUpdate(req.body.unFollowId,{$pull:{followers:req.body.userId}},{new:true})
      .populate('following','_id name')
      .populate('followers','_id name')
      .exec((err,result)=>{
          if(err){
            return res.status(400).json({
                error:`Error Occured ${err}`
            })
          }
          result.hashed_password=undefined
          result.salt=undefined
          return res.json(result)
      })  
}
export default {create,list,read,update,remove,userById,photo,addFollower,
            addFollowing,removeFollower,removeFollowing,temporaryImageData}