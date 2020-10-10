import mongoose from 'mongoose'
import crypto from 'crypto'
// import { ObjectId } from 'mongodb'

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:"Name is Required"
    },
    email:{
        type:String,
        trim:true,
        unique:'Email already Exists',
        match:[/.+\@.+\..+/,"Please fill valid email address"],
        required:"Email is required"
    },
    created:{
        type:Date,
        default:Date.now()
    },
    updated:Date,
    hashed_password:{
        type:String,
        required:"Password is required"
    },
    about:{
        type:String,
        trim:true,
	default:''
    },
    photo:{
        data:Buffer,
        contentType:String,
        
    },
    following:[{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }],
    followers:[{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }],
    salt:String
    
})

UserSchema
    .virtual('password')
    .set(function(password){
        this._password=password,
        this.salt=this.makeSalt(),
        this.hashed_password=this.encryptPassword(password)
    })
    .get(function(){
        return this._password
    })


UserSchema.methods={
    authenticate:function(plainText){
        return this.encryptPassword(plainText)===this.hashed_password
    },
    encryptPassword:function(password){
        if(!password)return''
        try{
            return crypto
                    .createHmac('sha1',this.salt)
                    .update(password)
                    .digest('hex')
        }
        catch(err){
            return ''
        }
    },
    makeSalt:function(){
        return Math.round((new Date().valueOf() * Math.random()))+''
    }
}
UserSchema.path('hashed_password').validate(function(v){
    if(this._password&&this._password.length<6){
        this.invalidate('password','Password must be 6 charachters long')
    }
    if(this.isNew&&!this._password){
        this.invalidate('password','Password must be 6 charachters long')
    }
},null)


export default mongoose.model('User',UserSchema)
