import React,{Component} from 'react'
import ApiUser from './api-user'
import { Paper, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText,ListItemSecondaryAction, IconButton, withStyles } from '@material-ui/core'
import {ArrowForward,Person} from '@material-ui/icons'
import { Link } from 'react-router-dom'

class Users extends Component{
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    
    componentDidMount(){
        
        ApiUser.listOfUsers().then((data)=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                console.log("Data is ",data)
               
                this.setState({
                    users:data
                })
            }
            
        })
    }
    render(){
        const {classes}=this.props
        console.log(this.state)
        return(
            <Paper className={classes.root} elevation={4}>
                <Typography  type="title">
                    All Users
                </Typography>
                <List dense>
                    {
                        this.state?this.state.users.map((item,i)=>{
                            return(
                                <Link to={"/user/"+item._id} key={i}>
                                    <ListItem button="button">
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Person/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={item.name}/>
                                        <ListItemSecondaryAction>
                                                <IconButton>
                                                    <ArrowForward/>
                                                </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                </Link>
                            )
                        }):<h1>Loading</h1>
                        

                    }
                </List>
            </Paper>
        )
    }
}
export default withStyles()(Users)