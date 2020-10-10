// import { response } from "express"
class UserCruds{

    static create=(user)=>{
        return fetch('/api/users',{
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(user)
                })
                .then(response=>{
                    console.log("Response from [api-user.js] [create]",response)
                    return response.json()
                })
                .catch(err=>{
                    console.log("Error from [api-user.js] [create]",err)
                })
    
    }
    
    static listOfUsers(){
        return fetch('/api/users',{
            method:'GET',
            headers:{
                'Accept':'application/json',
            }
        }).then(response=>{
            console.log("Response from [api-user.js] [list]",response)
            return response.json()
        })
        .catch(err=>{ console.log("Error from [api-user.js] [list]",err)})
    }
    
    static read=(params,credentials)=>{
        fetch('/api/user/'+params.userId,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':'Bearer '+credentials.t
            }
        }).then(response=>{
            console.log("Response from [api-user.js] [read]",response)
            return response.json()
        })
        .catch(err=>{console.log("Error from [api-user.js] [read]",err)})
    }
    
    static update=(params,credentials,user)=>{
        fetch('/api/users/'+params.userId,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':'Bearer '+credentials.t
            },
            body:JSON.stringify(user)
        })
        .then(response=>{
            console.log("Response from [api-user.js] [update]",response)
            return response.json()
        })
        .catch(err=>{console.log("Error from [api-user.js] [update]",err)})
    }
    static remove=(params,credentials)=>{
        fetch('/api/users/'+params.userId,{
            method:'DELETE',
            headers:{'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization':'Bearer '+credentials.t
            }
        })
        .then(response=>{
            console.log("Response from [api-user.js] [remove]",response)
            return response.json()
        })
        .catch(err=>{console.log("Error from [api-user.js] [remove]",err)})
    }

}



export default UserCruds