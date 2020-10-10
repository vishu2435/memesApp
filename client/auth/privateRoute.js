import React,{Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from './auth-helper'

const PrivateRoute=({children,...rest})=>{
    <Route {...rest} render={(props)=>{
        auth.isAuthenticated()?(
            <children {...props}/>
        ):(
            <Redirect to={
                {
                    pathname:'/signin',
                    state:{
                        from:props.location
                    }
                }
            }/>
        )
    }}

    />
}

export default PrivateRoute