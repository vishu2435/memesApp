const getErrorMessage=(err)=>{
    let message=''
    if(err.code){
        switch(err.code){
            case 11000:
            case 11001:
                message=getUniqueErrorMassage(err)
                break;  
            default:
                message="Something went wrong"
        }
    }else{
        for(let errName in err.errors){
            if(err.errors[errName].message){
                message=err.errors[errName].message
            }
        }
    }
    return message
}
const getUniqueErrorMassage(err){
    let output
    try {
        let fieldName=err.message(err.message.lastIndexOf('.$') + 2,                                             
        err.message.lastIndexOf('_1'))
        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) +   
      ' already exists'
    } catch (error) {
        
    }
}