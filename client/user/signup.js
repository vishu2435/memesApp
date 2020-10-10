import React,{Component} from 'react'
import ApiCrud from './api-user'
import {Card,CardContent, TextField, Typography, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText, withStyles} from '@material-ui/core'
import { Link } from 'react-router-dom'
class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Vishesh',
            email:'',
            password:'',
            open:false,
            error:''
        }
    }
    handleChange=name=>event=>{
        this.setState({
            [name]:event.target.value
        })
    }
    // clickSubmit=()=>{
    //     const user={
    //         name:this.state.name||undefined,
    //         email:this.state.email||undefined,
    //         password:this.state.password||undefined
    //     }
    //     ApiCrud.create(user)
    //     .then((data)=>{
    //         if(data.error){
    //             this.setState({error:data.error})
    //         }else{
    //             this.setState({error:'',open:true})
    //         }
    //     })
    // }
    render(){
        const {classes}=this.props
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography type="headline" component="h2" className={classes.title}>
                                Sign Up
                        </Typography>
                        <TextField id="name" label="Name" 
                                    className={classes.textField} 
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                    margin="normal"
                                    /><br/>
                        <TextField id="email" label="email" 
                                    className={classes.textField} 
                                    value={this.state.email}
                                    onChange={this.handleChange('email')}
                                    margin="normal"
                                    /><br/>
                        <TextField id="password" label="Password" 
                                    className={classes.textField} 
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                    margin="normal"
                                    /><br/>

                            
                        {this.state.error&&(
                            <Typography>
                                <Icon color="error" className={classes.error}>Error</Icon>
                                {this.state.error}
                            </Typography>
                        )}                                               
                    </CardContent>
                    <CardActions>
                        <Button color="primary" className={classes.submit} onClick={this.clickSubmit}>Submit</Button>
                    </CardActions>
                </Card>
                <Dialog open={this.state.open} disableBackdropClick={true}>
                    <DialogTitle>New Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            New account successfully created
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Link to='/signin'>
                            <Button color="primary" autoFocus="autoFocus" variant="raised">
                                Sign in
                            </Button>
                        </Link> 
                    </DialogActions>
                </Dialog>
            </div>
        )

    }
}
export default withStyles()(SignUp)
