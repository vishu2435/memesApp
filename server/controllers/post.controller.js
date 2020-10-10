import Post from '../models/post.models'
import formidable from 'formidable'
import fs from 'fs'

const listNewsFeed=(req,res)=>{
    let following=req.profile.following
    following.push(req.profile._id)
    Post.find({postedBy:{$in:req.profile.following}})
        .populate('comments','text created')
        .populate('comments.postedBy','_id name')
        .populate('postedBy','_id name')
        .sort('-created')
        .exec((err,posts)=>{
            if(err){
                return res.status(400).json({
                    error:`Error in listing news feed ${err}`
                })
            }
            return res.json(posts)
        })
}

const listByUser=(req,res)=>{
	Post.find({postedBy:req.profile._id})
		.populate('comments','text created')
		.populate('comments.postedBy','_id name')
		.populate('postedBy','_id name')
		.sort('-created')
		.exec((err,posts)=>{
			if(err){
				return res.status(400).json(
				{error:`Error in listUser ${err}`}			
				)
			}
			res.json(posts)
		})

}

const create=(req,res)=>{
    let form=new formidable.IncomingForm()
    form.keepExtensions=true
    form.parse(req,(err,fields,files)=>{
        if(err){
            return res.status(400).json({
                error:`Error in parsing news feed ${err}`
            })
        }
        let post=new Post(fields)
        post.postedBy=req.profile
        if(files.photo){
            post.photo.data=fs.readFileSync(files.photo.path)
            post.photo.contentType=files.photo.type
        }
        post.save((err,result)=>{
            if(err){

            return res.status(400).json({
                error:`Error in saving news feed ${err}`
            })
            }
            return res.json(result)
        })
    }) 
}
const photo=(req,res)=>{
    const data=req.post.photo.data
    res.set('Content-Type',req.post.photo.contentType)
    return res.send(data)
}


const postById=(req,res,next,postId)=>{
    Post.findById(postId)
        .populate('postedBy','_id name')
        .exec((err,post)=>{
            if (err || !post)
            return res.status('400').json({
              error: `Post not found ${err}`
            })
          req.post = post
          next()
        })
}

export default {listNewsFeed,create,photo,postById,listByUser}
