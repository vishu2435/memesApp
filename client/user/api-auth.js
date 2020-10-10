import { response } from "express"

const signin=(user)=>{
    fetch('/auth/signin',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    }).then((response)=>{
        return response.json()
    })
    .catch(err=>{
        console.log('Error in [api-auth.js] [signin] ',err)
    })

}
const signout=()=>{
    fetch('/user/signout',{
        method:'GET',
    
    })
    .then((response)=>{
        return response.json()
    })
    .catch(err=>{
        console.log('Error in [api-auth.js] [signout] ',err)
    })
}
export {signin,signout}